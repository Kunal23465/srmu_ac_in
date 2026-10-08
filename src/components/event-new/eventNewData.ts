// Sample content from the supplied design; replace with verified records when connecting a data source.
export type EventCategory = "Academic" | "Technical" | "Cultural" | "Sports" | "Special" | "Holiday";
export interface CalendarEvent {
  day: number;
  title: string;
  cat: EventCategory;
  venue: string;
  time: string;
  desc: string;
}

export const calendarEvents: Record<string, CalendarEvent[]> = {
  "2026-10": [
    {
      "day": 15,
      "title": "National Conference on Emerging Technologies",
      "cat": "Academic",
      "venue": "SRMU Campus",
      "time": "10:00 AM",
      "desc": "A university-wide gathering exploring advances in AI and digital transformation."
    },
    {
      "day": 18,
      "title": "Inter-Department Cricket Tournament",
      "cat": "Sports",
      "venue": "Sports Ground",
      "time": "9:00 AM",
      "desc": "Annual cricket tournament between university departments."
    },
    {
      "day": 22,
      "title": "Technical Innovation Challenge",
      "cat": "Technical",
      "venue": "Innovation Lab",
      "time": "11:00 AM",
      "desc": "Cross-disciplinary contest for original technical ideas."
    },
    {
      "day": 28,
      "title": "Alumni Interaction Session",
      "cat": "Academic",
      "venue": "Seminar Hall",
      "time": "3:00 PM",
      "desc": "Graduates share career journeys and mentor current students."
    },
    {
      "day": 2,
      "title": "Mahatma Gandhi's Birthday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 19,
      "title": "Dussehra - Mahashtami",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 20,
      "title": "Dussehra (Mahanavmi & Vijay Dashmi)",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 26,
      "title": "Maharishi Valmiki Jayanti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 29,
      "title": "Karva Chauth",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 31,
      "title": "Sardar Ballabh Bhai Patel / Acharya Narendra Dev Jayanti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    }
  ],
  "2026-11": [
    {
      "day": 5,
      "title": "Cultural Fest Auditions",
      "cat": "Cultural",
      "venue": "Auditorium",
      "time": "2:00 PM",
      "desc": "Auditions for the annual cultural festival."
    },
    {
      "day": 12,
      "title": "Guest Lecture: Industry 5.0",
      "cat": "Special",
      "venue": "Seminar Hall",
      "time": "11:00 AM",
      "desc": "Talk by an industry leader on Industry 5.0 trends."
    },
    {
      "day": 8,
      "title": "Diwali (Deepavali)",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 16,
      "title": "Veerangana Uda Devi Shahid Divas",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 24,
      "title": "Guru Nanak's Birthday / Guru Teg Bahadur's Shahid Divas",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday / Restricted Holiday"
    }
  ],
  "2026-01": [
    {
      "day": 3,
      "title": "Hazarat Ali's Birthday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 14,
      "title": "Makar Sankranti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 23,
      "title": "Basant Panchami",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 24,
      "title": "Jannayak Karpuri Thakur's Birthday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 26,
      "title": "Republic Day Celebration",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Mandatory University Celebration"
    }
  ],
  "2026-02": [
    {
      "day": 4,
      "title": "Shab-e-Barat",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 12,
      "title": "Birthday of Swami Dayanand Saraswati",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 15,
      "title": "Maha Shivratri",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ],
  "2026-03": [
    {
      "day": 4,
      "title": "Holi",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 13,
      "title": "Alvida Juma (Jamat-Ul-Vida)",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 19,
      "title": "Cheti Chand",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 21,
      "title": "Id-Ul-Fitr",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 26,
      "title": "Ram Navmi",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 31,
      "title": "Mahavir Jayanti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ],
  "2026-04": [
    {
      "day": 3,
      "title": "Good Friday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 4,
      "title": "Easter Saturday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 14,
      "title": "Dr Bhim Rao Ambedkar's Birthday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 17,
      "title": "Chandrashekhar Jayanti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    }
  ],
  "2026-05": [
    {
      "day": 1,
      "title": "Buddha Purnima",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 9,
      "title": "Lok Nayak Maharana Pratap Jayanti",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 27,
      "title": "Id-Ul-Zuha (Bakrid)",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ],
  "2026-06": [
    {
      "day": 26,
      "title": "Muharram",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ],
  "2026-07": [
    {
      "day": 16,
      "title": "Rath Yatra",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    }
  ],
  "2026-08": [
    {
      "day": 4,
      "title": "Chehllum",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 15,
      "title": "Independence Day Celebration",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Mandatory University Celebration"
    },
    {
      "day": 26,
      "title": "Id-E-Milad",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 28,
      "title": "Raksha Bandhan",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ],
  "2026-09": [
    {
      "day": 4,
      "title": "Janamashtami",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    },
    {
      "day": 14,
      "title": "Hartalika Teej / Ganesh Chaturthi",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 17,
      "title": "Vishwakarma Puja",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 25,
      "title": "Anant Chaturdashi",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    }
  ],
  "2026-12": [
    {
      "day": 16,
      "title": "Urs of Khwaja Moinuddin Chishti Ajmeri Garib Nawaz",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 23,
      "title": "Hazarat Ali's Birthday / Chaudhary Charan Singh's Birthday",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday / Restricted Holiday"
    },
    {
      "day": 24,
      "title": "Christmas Eve",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Restricted Holiday"
    },
    {
      "day": 25,
      "title": "Christmas Day",
      "cat": "Holiday",
      "venue": "University Campus",
      "time": "All Day",
      "desc": "Holiday"
    }
  ]
};
export const archiveEvents = [
  {title:"Tech Fest 2025",year:"2025",cat:"Technical",date:"Nov 2025",desc:"University-wide technology festival with hackathons and exhibitions."},
  {title:"Cultural Utsav 2025",year:"2025",cat:"Cultural",date:"Mar 2025",desc:"Annual multi-day cultural celebration."},
  {title:"Sports Meet 2024",year:"2024",cat:"Sports",date:"Jan 2024",desc:"Inter-college athletics and team sports competition."},
  {title:"AI Symposium 2024",year:"2024",cat:"Academic",date:"Sep 2024",desc:"Symposium on applied artificial intelligence."},
  {title:"Founders' Talk 2023",year:"2023",cat:"Special",date:"Oct 2023",desc:"Conversation with startup founders and industry leaders."},
  {title:"Hackathon 2023",year:"2023",cat:"Technical",date:"Feb 2023",desc:"24-hour coding hackathon for engineering students."}
];

