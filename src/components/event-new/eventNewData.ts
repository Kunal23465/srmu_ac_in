// Sample content from the supplied design; replace with verified records when connecting a data source.
export type EventCategory = "Academic" | "Technical" | "Cultural" | "Sports" | "Special";
export interface CalendarEvent {
  day: number;
  title: string;
  cat: EventCategory;
  venue: string;
  time: string;
  desc: string;
}

export const calendarEvents: Record<string, CalendarEvent[]> = {
  "2026-10":[
    {day:15,title:"National Conference on Emerging Technologies",cat:"Academic",venue:"SRMU Campus",time:"10:00 AM",desc:"A university-wide gathering exploring advances in AI and digital transformation."},
    {day:18,title:"Inter-Department Cricket Tournament",cat:"Sports",venue:"Sports Ground",time:"9:00 AM",desc:"Annual cricket tournament between university departments."},
    {day:22,title:"Technical Innovation Challenge",cat:"Technical",venue:"Innovation Lab",time:"11:00 AM",desc:"Cross-disciplinary contest for original technical ideas."},
    {day:28,title:"Alumni Interaction Session",cat:"Academic",venue:"Seminar Hall",time:"3:00 PM",desc:"Graduates share career journeys and mentor current students."}
  ],
  "2026-11":[
    {day:5,title:"Cultural Fest Auditions",cat:"Cultural",venue:"Auditorium",time:"2:00 PM",desc:"Auditions for the annual cultural festival."},
    {day:12,title:"Guest Lecture: Industry 5.0",cat:"Special",venue:"Seminar Hall",time:"11:00 AM",desc:"Talk by an industry leader on Industry 5.0 trends."}
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

