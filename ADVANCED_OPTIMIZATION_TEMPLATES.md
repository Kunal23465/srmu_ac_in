// Advanced Performance Hook for Home Page Sections
// File: src/hooks/useImageOptimization.ts

import { useEffect, useRef, useState } from 'react';

interface UseImageOptimizationProps {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook to optimize image loading with intersection observer
 * Useful for lazy loading images below the fold
 */
export const useImageOptimization = ({
  threshold = 0.1,
  rootMargin = '100px',
}: UseImageOptimizationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { isVisible, ref };
};

// Usage in component:
// const { isVisible, ref } = useImageOptimization();
// <div ref={ref}>
//   {isVisible && <img src={src} alt={alt} />}
// </div>

---

// Performance Monitoring Hook
// File: src/hooks/usePerformanceMetrics.ts

import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs improvement' | 'poor';
}

export const usePerformanceMetrics = () => {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const lastEntry = list.getEntries().pop();
        if (lastEntry) {
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            console.log('CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const firstInput = list.getEntries()[0];
        console.log('FID:', (firstInput as any).processingDuration);
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance monitoring not fully supported');
    }
  }, []);
};

---

// Image Preloading Utility
// File: src/utils/imagePreloader.ts

export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't fail on error
        img.src = url;
      });
    })
  );
};

// Usage:
// import { preloadImages } from '@/utils/imagePreloader';
// preloadImages([img1, img2, img3]).then(() => {
//   // Images loaded, update state or UI
// });

---

// Adaptive Image Component with srcset
// File: src/components/home/AdaptiveImage.tsx

import React, { ImgHTMLAttributes } from 'react';

interface AdaptiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean;
}

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  srcSet,
  sizes = '100vw',
  priority = false,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      {...props}
    />
  );
};

export default AdaptiveImage;

// Usage with responsive images:
// <AdaptiveImage
//   src="/image-large.webp"
//   srcSet="
//     /image-small.webp 400w,
//     /image-medium.webp 800w,
//     /image-large.webp 1200w
//   "
//   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px"
//   alt="Description"
//   width={1200}
//   height={800}
// />

---

// Build-time Image Optimization
// File: scripts/optimize-images.mjs

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminAvif from 'imagemin-avif';
import imageminPngquant from 'imagemin-pngquant';

async function optimizeImages() {
  try {
    // Optimize to WebP
    await imagemin(['src/assets/images/**/*.{jpg,png}'], {
      destination: 'public/images',
      plugins: [
        imageminWebp({
          quality: 80,
        }),
      ],
    });

    // Optimize to AVIF (future format)
    await imagemin(['public/images/**/*.webp'], {
      destination: 'public/images',
      plugins: [
        imageminAvif({
          quality: 75,
        }),
      ],
    });

    // Optimize PNG
    await imagemin(['src/assets/images/**/*.png'], {
      destination: 'public/images',
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });

    console.log('✅ Images optimized successfully');
  } catch (error) {
    console.error('❌ Image optimization failed:', error);
    process.exit(1);
  }
}

optimizeImages();

// Add to package.json:
// "scripts": {
//   "optimize:images": "node scripts/optimize-images.mjs"
// }

---

// Vite Config Image Optimization
// File: vite.config.ts (partial)

import viteImagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
    }),
  ],
};

---

// Service Worker for Image Caching
// File: public/sw.js (basic example)

const CACHE_NAME = 'srmu-images-v1';
const imageExtensions = ['.webp', '.jpg', '.png', '.gif'];

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only cache images
  if (!imageExtensions.some((ext) => url.pathname.endsWith(ext))) {
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      return (
        response ||
        fetch(request).then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        })
      );
    })
  );
});

// Register in src/entry-client.tsx:
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').catch(console.error);
// }

---

// Performance Report Generation
// File: scripts/generate-perf-report.mjs

import lighthouse from 'lighthouse';
import * as fs from 'fs';
import * as chrome from 'chrome-launcher';

async function generateReport() {
  const launchConfig = {
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
  };

  const options = {
    logLevel: 'info',
    output: 'json',
  };

  const runnerResult = await lighthouse(
    'http://localhost:5173',
    options,
    launchConfig
  );

  // Write results to file
  const results = runnerResult.lhr;
  fs.writeFileSync(
    'performance-report.json',
    JSON.stringify(results, null, 2)
  );

  console.log('📊 Performance Report:');
  console.log(`Performance Score: ${results.categories.performance.score * 100}`);
  console.log(`Accessibility Score: ${results.categories.accessibility.score * 100}`);
  console.log(`SEO Score: ${results.categories.seo.score * 100}`);
}

generateReport().catch(console.error);
