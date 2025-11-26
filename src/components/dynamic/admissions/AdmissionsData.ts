import { FileSpreadsheet, Upload, Wallet, GraduationCap } from 'lucide-react';
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
    title: "Deposit Fee",
    desc: "Pay the required admission deposit to secure your seat for the program.",
    icon: Wallet,
    step: "03"
  },
  {
    title: "Start Classes",
    desc: "Pay the admission fee, collect your ID card, and begin your journey.",
    icon: GraduationCap,
    step: "04"
  }
];
