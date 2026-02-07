import React from "react";
import { useLocation } from "react-router-dom";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";

const BlogDetailsPage: React.FC = () => {
  const location = useLocation().state;
  const data = location.data;
  // const { id } = useParams<{ id: string }>();
  // const blog = blogCards.find((b) => b.routeKey === id);

  // if (!blog) {
  //   return (
  //     <div className="py-20 text-center bg-gray-50">
  //       <h1 className="text-3xl font-semibold text-red-600 mb-4">Blog Post Not Found</h1>
  //       <p className="text-gray-600">The blog post you are looking for does not exist.</p>
  //     </div>
  //   );
  // }

  //   {
  //     "blogId": 5,
  //     "title": "How to Get into Top Postgraduate Biotechnology Programs",
  //     "description": "<p>Biotechnology is one of the most dynamic fields of science, blending biology with technology to create solutions in healthcare, agriculture, environment, and industry. For graduates looking to specialize further, postgraduate programs such as <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Sc\">M.Sc</a>. Biotechnology and <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Tech\">M.Tech</a>. Biotechnology open doors to advanced learning, research, and high growth careers.</p><p>If you are planning to pursue biotechnology after graduation, this guide will walk you through everything you need to know from eligibility and skills required to career opportunities and tips for admission.</p><h4><strong>Why Choose Postgraduate Biotechnology?</strong></h4><p>Biotechnology has transformed the way we live, work, and heal. Postgraduate programs allow students to:</p><p><strong>Deepen subject knowledge</strong>&nbsp;in molecular biology, genetic engineering, bioinformatics, and industrial biotech.</p><p><strong>Get hands on training</strong>&nbsp;in well equipped laboratories and through research projects.</p><p><strong>Boost employability</strong>&nbsp;with exposure to real world problems and industry based internships.</p><p><strong>Explore multiple career paths</strong>&nbsp;in pharmaceuticals, healthcare, agriculture, and research institutions.</p><p>Whether you pursue <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Sc\">M.Sc</a>. or <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Tech\">M.Tech</a>, postgraduate biotechnology equips you with advanced knowledge and practical skills to thrive in both academia and industry.</p><h4><strong>Eligibility &amp; Admission Process</strong></h4><p>To get into leading postgraduate biotechnology programs, you must first meet the eligibility criteria. Generally, universities require:</p><p><strong>For </strong><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Sc\"><strong>M.Sc</strong></a><strong>. Biotechnology:</strong><br>A bachelor’s degree in Biotechnology, Microbiology, Biochemistry, Life Sciences, or a related field.<br>Minimum aggregate marks as specified by the institution (usually 50% or above).</p><p><strong>For </strong><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Tech\"><strong>M.Tech</strong></a><strong> Biotechnology:</strong><br>A B.Tech/BE degree in Biotechnology, Chemical Engineering, Biomedical Engineering, or equivalent.<br>Many universities also accept candidates with <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Sc\">M.Sc</a>. in relevant fields through entrance tests.</p><p><strong>Admission Process:</strong><br>Universities may conduct their own entrance tests or accept scores from national exams such as GATE/NET/CSIR UGC.<br>Some institutions also allow direct admission based on academic merit.<br>Shortlisted students may undergo interviews or counseling rounds before final selection.</p><h4><strong>Skills You Need to Succeed</strong></h4><p>Success in biotechnology goes beyond academic scores. To stand out, you should cultivate:</p><p><strong>Strong analytical skills</strong>&nbsp;to interpret data and solve problems.<br><strong>Research aptitude</strong>&nbsp;for designing experiments and contributing to innovation.<br><strong>Technical skills</strong>&nbsp;in lab techniques, computational biology, and bioinformatics tools.<br><strong>Collaboration and communication skills</strong>&nbsp;to work effectively in interdisciplinary teams.</p><p>Developing these skills during your undergraduate studies will give you an edge during admissions and future career growth.</p><h4><strong>What You’ll Study in PG Biotechnology</strong></h4><p>A typical postgraduate biotechnology curriculum includes:</p><p><strong>Core subjects:</strong>&nbsp;Molecular Biology, Genetic Engineering, Bioprocess Technology, Immunology, and Bioinformatics.<br><strong>Practical learning:</strong>&nbsp;Lab experiments, industrial projects, internships, and dissertation work.<br><strong>Electives and specialization areas:</strong>&nbsp;Agricultural Biotechnology, Environmental Biotechnology, Pharmaceutical Biotechnology, or Computational Biology.</p><p>This blend of theory and practice ensures that students are not only well versed in concepts but also industry ready.</p><h4><strong>Career Opportunities After Post Graduation</strong></h4><p>Completing an <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Sc\">M.Sc</a>. or <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://M.Tech\">M.Tech</a> in Biotechnology opens doors to diverse roles:</p><p><strong>Research Scientist</strong>&nbsp;in pharma companies, agricultural firms, or biotech startups.<br><strong>Bioprocess Engineer</strong>&nbsp;managing large scale production of vaccines, enzymes, and bio fuels.<br><strong>Clinical Research Associate</strong>&nbsp;conducting trials for new drugs and therapies.<br><strong>Bioinformatics Analyst</strong>&nbsp;applying computational tools to genetics and molecular data.<br><strong>Academia and Higher Studies</strong>&nbsp;pursuing a Ph.D. or teaching in universities.</p><p>Biotechnology graduates are in demand not only in India but also in global markets, making it a truly international career path.</p><h4><strong>Tips to Secure Admission in Top Programs</strong></h4><p><strong>Strengthen your basics</strong>&nbsp;Revise undergraduate subjects thoroughly.<br><strong>Prepare for entrance exams</strong>&nbsp;Focus on core biotechnology, aptitude, and reasoning.<br><strong>Gain practical exposure</strong>&nbsp;Internships or lab training enhance your profile.<br><strong>Build a strong statement of purpose (SOP)</strong>&nbsp;Highlight your interests, skills, and career goals.<br><strong>Stay updated</strong>&nbsp;Read about current trends in genetic engineering, vaccines, or bioinformatics.</p><p>These efforts showcase both passion and preparedness, increasing your chances of admission.</p><h4><strong>A Step Toward a Promising Future</strong></h4><p>Pursuing a postgraduate degree in biotechnology is more than an academic milestone, it is an investment in a future of discovery, innovation, and meaningful contribution to society. With the right preparation, clear goals, and strong fundamentals, you can secure admission into leading programs. Institutions like SRMU provide the right blend of academic rigor, hands on learning, and career support, making them an excellent choice for aspiring biotechnology professionals.</p>",
  //     "postedOn": "2025-09-04",
  //     "featured": false,
  //     "imagePath": "https://srmuwebservice.srmu.ac.in:7003/srmuwebdocs/blogs/1767761541792_lab-technician-doctor-analyzing-virus-evolution-lo-04092501501148.jpg",
  //     "status": true
  // }

  return (
    <>
      <div className={`${Classes["container"]}`}>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Date */}

            {/* Title */}
            <h1 className="font32 fw500 text-[#023047] leading-9">{data.title}</h1>

            <div className="inline-block mb-10 bg-[#ffb703] px-4 rounded-2xl text-[#0f4a85] mt-2 py-1">{data.postedOn}</div>

            {/* Image */}
            <div className="mb-8">
              <img src={data.imagePath} alt={data.title} className="w-full h-full max-h-[60vh] object-cover  shadow-lg" />
            </div>

            <div className="mt-8 text-[15px] prose prose-lg text-justify [&_li]:mb-2 [&_p]:mb-3 [&_h4]:text-[#212529] [&_h4]:font-normal!  [&_h4]:text-[22.5px]  [&_h4]:mb-3 [&_ul]:mb-8 [&_li]:ml-6 [&_a]:text-[#ffb703]">
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </>
  );
};

export default BlogDetailsPage;
