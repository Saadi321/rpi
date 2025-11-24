import { FileSpreadsheet, Upload, Users, GraduationCap } from 'lucide-react';
import { AdmissionStep } from './AdmissionsTypes';

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    title: "Submit Application",
    desc: "Fill out the online admission form or visit our campus admission office.",
    icon: FileSpreadsheet,
    step: "01"
  },
  {
    title: "Document Submission",
    desc: "Upload scanned copies of Matric/SSC result card, CNIC/B-Form, and photos.",
    icon: Upload,
    step: "02"
  },
  {
    title: "Merit & Interview",
    desc: "Check the merit list on the website and appear for a short interview.",
    icon: Users,
    step: "03"
  },
  {
    title: "Start Classes",
    desc: "Pay the admission fee, collect your ID card, and begin your journey.",
    icon: GraduationCap,
    step: "04"
  }
];
