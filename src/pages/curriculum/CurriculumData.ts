import { Zap, HardHat, Cpu, Monitor } from 'lucide-react';
import { ProgramCurriculum } from './CurriculumTypes';

export const CURRICULUM_DATA: ProgramCurriculum[] = [
  {
    id: "electrical",
    programName: "Electrical Technology",
    icon: Zap,
    color: "text-yellow-600",
    years: [
      {
        year: "First Year",
        subjects: [
          {
            id: "et-115",
            code: "ET-115",
            name: "Principles of Electrical Engineering",
            type: "both",
            creditHours: 4,
            theoryHours: 3,
            practicalHours: 3,
            isCompulsory: true,
            description: "Fundamental concepts of electricity, DC circuits, magnetism, and electrostatics.",
            outcomes: ["Understand Ohm's Law and Kirchhoff's Laws", "Analyze series and parallel circuits", "Grasp concepts of magnetism and electromagnetism"]
          },
          {
            id: "et-121",
            code: "ET-121",
            name: "Basic Electrical Drawing",
            type: "practical",
            creditHours: 1,
            theoryHours: 0,
            practicalHours: 3,
            isCompulsory: true,
            description: "Introduction to technical drawing symbols and electrical layout planning.",
            outcomes: ["Read electrical symbols", "Draw house wiring diagrams", "Understand circuit schematics"]
          },
          {
            id: "gen-111",
            code: "GEN-111",
            name: "Islamiat & Pakistan Studies",
            type: "theory",
            creditHours: 1,
            theoryHours: 1,
            practicalHours: 0,
            isCompulsory: true,
            description: "Study of Islamic values and the history/culture of Pakistan.",
            outcomes: ["Moral character development", "Understanding national history"]
          }
        ]
      },
      {
        year: "Second Year",
        subjects: [
          {
            id: "et-213",
            code: "ET-213",
            name: "DC Machines & Batteries",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Construction and working principles of DC generators and motors.",
            outcomes: ["Operate DC motors", "Perform load tests on generators", "Battery maintenance"]
          },
          {
            id: "et-223",
            code: "ET-223",
            name: "Electrical Instruments & Measurements",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Usage of various metering devices like ammeters, voltmeters, and oscilloscopes.",
            outcomes: ["Calibrate instruments", "Measure power and energy", "Use bridges for resistance measurement"]
          }
        ]
      },
      {
        year: "Third Year",
        subjects: [
          {
            id: "et-316",
            code: "ET-316",
            name: "AC Machines",
            type: "both",
            creditHours: 4,
            theoryHours: 3,
            practicalHours: 3,
            isCompulsory: true,
            description: "Comprehensive study of Transformers, Induction Motors, and Synchronous Machines.",
            outcomes: ["Analyze transformer efficiency", "Synchronize alternators", "Control induction motors"]
          },
          {
            id: "et-353",
            code: "ET-353",
            name: "Repair & Maintenance of Electrical Equipment",
            type: "practical",
            creditHours: 3,
            theoryHours: 1,
            practicalHours: 6,
            isCompulsory: true,
            description: "Hands-on troubleshooting of domestic and industrial appliances.",
            outcomes: ["Rewind motors", "Fix domestic appliances", "Safety protocols"]
          }
        ]
      }
    ]
  },
  {
    id: "civil",
    programName: "Civil Technology",
    icon: HardHat,
    color: "text-orange-600",
    years: [
      {
        year: "First Year",
        subjects: [
          {
            id: "ct-114",
            code: "CT-114",
            name: "Civil Drafting",
            type: "practical",
            creditHours: 3,
            theoryHours: 1,
            practicalHours: 6,
            isCompulsory: true,
            description: "Basics of engineering drawing, projections, and building plans.",
            outcomes: ["Draw plans and elevations", "Understand scale and dimensioning"]
          },
          {
            id: "ct-123",
            code: "CT-123",
            name: "Construction Materials",
            type: "theory",
            creditHours: 3,
            theoryHours: 3,
            practicalHours: 0,
            isCompulsory: true,
            description: "Study of bricks, cement, aggregates, and concrete.",
            outcomes: ["Identify construction materials", "Understand material properties"]
          }
        ]
      },
      {
        year: "Second Year",
        subjects: [
          {
            id: "ct-213",
            code: "CT-213",
            name: "Public Health Technology",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Water supply systems, plumbing, and sanitation.",
            outcomes: ["Design water supply schemes", "Understand plumbing fixtures"]
          },
          {
            id: "ct-223",
            code: "CT-223",
            name: "Advanced Civil Drafting",
            type: "practical",
            creditHours: 3,
            theoryHours: 1,
            practicalHours: 6,
            isCompulsory: true,
            description: "CAD based drafting and detailed structural drawings.",
            outcomes: ["Use AutoCAD", "Draft multi-story buildings"]
          }
        ]
      },
      {
        year: "Third Year",
        subjects: [
          {
            id: "ct-313",
            code: "CT-313",
            name: "Concrete Technology",
            type: "both",
            creditHours: 4,
            theoryHours: 2,
            practicalHours: 6,
            isCompulsory: true,
            description: "Design and testing of reinforced concrete structures.",
            outcomes: ["Mix design calculation", "Slump test execution", "RCC beam design"]
          },
           {
            id: "ct-343",
            code: "CT-343",
            name: "Highway Engineering",
            type: "theory",
            creditHours: 3,
            theoryHours: 3,
            practicalHours: 0,
            isCompulsory: true,
            description: "Road geometry, pavement design, and traffic engineering.",
            outcomes: ["Road alignment survey", "Pavement material selection"]
          }
        ]
      }
    ]
  },
  {
    id: "electronics",
    programName: "Electronics Technology",
    icon: Cpu,
    color: "text-blue-600",
    years: [
      {
        year: "First Year",
        subjects: [
          {
            id: "elt-114",
            code: "ELT-114",
            name: "Basic Electronics",
            type: "both",
            creditHours: 4,
            theoryHours: 3,
            practicalHours: 3,
            isCompulsory: true,
            description: "Semiconductor physics, diodes, transistors, and biasing circuits.",
            outcomes: ["Analyze diode circuits", "Understand BJT operation"]
          }
        ]
      },
      {
        year: "Second Year",
        subjects: [
          {
            id: "elt-214",
            code: "ELT-214",
            name: "Digital Electronics",
            type: "both",
            creditHours: 4,
            theoryHours: 3,
            practicalHours: 3,
            isCompulsory: true,
            description: "Logic gates, boolean algebra, flip-flops, and counters.",
            outcomes: ["Design combinational logic", "Implement counters"]
          }
        ]
      },
      {
        year: "Third Year",
        subjects: [
          {
            id: "elt-314",
            code: "ELT-314",
            name: "Microcontrollers",
            type: "both",
            creditHours: 4,
            theoryHours: 3,
            practicalHours: 3,
            isCompulsory: true,
            description: "Architecture and programming of 8051/AVR microcontrollers.",
            outcomes: ["Assembly language programming", "Interfacing sensors"]
          }
        ]
      }
    ]
  },
  {
    id: "cit",
    programName: "Comp. Info. Technology",
    icon: Monitor,
    color: "text-cyan-600",
    years: [
      {
        year: "First Year",
        subjects: [
          {
            id: "cit-113",
            code: "CIT-113",
            name: "Introduction to Computer Programming",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Basics of C language, flowcharts, and algorithms.",
            outcomes: ["Write basic C programs", "Understand logic flow"]
          },
           {
            id: "cit-133",
            code: "CIT-133",
            name: "Office Automation",
            type: "practical",
            creditHours: 3,
            theoryHours: 1,
            practicalHours: 6,
            isCompulsory: true,
            description: "Mastery of Word, Excel, and PowerPoint for professional use.",
            outcomes: ["Document formatting", "Spreadsheet formulas"]
          }
        ]
      },
      {
        year: "Second Year",
        subjects: [
          {
            id: "cit-233",
            code: "CIT-233",
            name: "Object Oriented Programming (Java)",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Classes, objects, inheritance, and polymorphism in Java.",
            outcomes: ["Build Java applications", "Understand OOP concepts"]
          },
          {
            id: "cit-243",
            code: "CIT-243",
            name: "Database Management Systems",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "SQL, normalization, and relational database design.",
            outcomes: ["Design ER diagrams", "Write SQL queries"]
          }
        ]
      },
      {
        year: "Third Year",
        subjects: [
          {
            id: "cit-333",
            code: "CIT-333",
            name: "Web Development (PHP/Laravel)",
            type: "both",
            creditHours: 3,
            theoryHours: 2,
            practicalHours: 3,
            isCompulsory: true,
            description: "Full stack web development concepts using modern frameworks.",
            outcomes: ["Build dynamic websites", "Connect to databases"]
          },
          {
            id: "cit-353",
            code: "CIT-353",
            name: "Network Administration",
            type: "practical",
            creditHours: 3,
            theoryHours: 1,
            practicalHours: 6,
            isCompulsory: true,
            description: "Configuring routers, switches, and managing LAN/WAN.",
            outcomes: ["IP addressing", "Network security basics"]
          }
        ]
      }
    ]
  }
];
