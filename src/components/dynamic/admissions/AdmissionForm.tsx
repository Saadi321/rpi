import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Home, 
  GraduationCap, 
  Layers, 
  FileSignature, 
  Send,
  Zap,
  HardHat,
  Cpu,
  Monitor,
  Check,
  Download,
  Printer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileUpload } from '@/components/ui/file-upload';

// --- Types & Interfaces ---

interface FormData {
  // Step 1: Personal Info
  studentName: string;
  studentPicture: File | null;
  studentPicturePreview: string | null;
  fatherName: string;
  isFatherAlive: 'Alive' | 'Deceased';
  guardianType: 'Father' | 'Other';
  guardianName: string;
  guardianRelation: string;
  cnic: string;
  dob: string;
  religion: string;

  // Step 2: Father/Guardian Details
  guardianCnic: string;
  guardianProfession: string;
  permanentAddress: string;
  permanentDistrict: string;
  presentAddress: string;
  presentDistrict: string;
  officePhone: string;
  residencePhone: string;
  whatsappNumber: string;
  studentPhone: string;

  // Step 3: Academic Record
  matricRollNo: string;
  matricYear: string;
  matricGrade: string;
  matricMarksObtained: string;
  matricTotalMarks: string;
  schoolName: string;
  boardName: string;
  registrationNumber: string;
  subEnglish: number | '';
  subMath: number | '';
  subPhysics: number | '';
  subChemistry: number | '';
  
  // Inter (Optional)
  interRollNo: string;
  interYear: string;
  interGrade: string;
  interMarksObtained: string;
  interTotalMarks: string;
  interCollegeName: string;
  interBoardName: string;

  // Step 4: Program Selection
  pref1: string;
  pref2: string;
  pref3: string;

  // Step 5: Undertaking
  annualIncome: string;
  guardianSignature: File | null;
  guardianSignaturePreview: string | null;
  applicantSignature: File | null;
  applicantSignaturePreview: string | null;
  agreed: boolean;
}

const INITIAL_DATA: FormData = {
  studentName: '', studentPicture: null, studentPicturePreview: null,
  fatherName: '', isFatherAlive: 'Alive', guardianType: 'Father', guardianName: '', guardianRelation: '',
  cnic: '', dob: '', religion: 'Islam',
  
  guardianCnic: '', guardianProfession: '', permanentAddress: '', permanentDistrict: '',
  presentAddress: '', presentDistrict: '', officePhone: '', residencePhone: '',
  whatsappNumber: '', studentPhone: '',

  matricRollNo: '', matricYear: '', matricGrade: '', matricMarksObtained: '', 
  matricTotalMarks: '1100', schoolName: '', boardName: '', registrationNumber: '',
  subEnglish: '', subMath: '', subPhysics: '', subChemistry: '',

  interRollNo: '', interYear: '', interGrade: '', interMarksObtained: '', interTotalMarks: '', interCollegeName: '', interBoardName: '',

  pref1: '', pref2: '', pref3: '',

  annualIncome: '', guardianSignature: null, guardianSignaturePreview: null,
  applicantSignature: null, applicantSignaturePreview: null, agreed: false
};

const PROGRAMS = [
  { id: 'electrical', name: 'Electrical Technology', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  { id: 'civil', name: 'Civil Technology', icon: HardHat, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  { id: 'electronics', name: 'Electronics Technology', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { id: 'cit', name: 'Computer Information Tech', icon: Monitor, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
];

const STEPS = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Guardian Details", icon: Home },
  { id: 3, title: "Academic Record", icon: GraduationCap },
  { id: 4, title: "Program Selection", icon: Layers },
  { id: 5, title: "Undertaking", icon: FileSignature },
];

interface AdmissionFormProps {
  onBack: () => void;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- Handlers ---
  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto Uppercase
      if (['studentName', 'fatherName', 'guardianName', 'schoolName', 'boardName', 'permanentAddress', 'presentAddress'].includes(field)) {
        (updated as any)[field] = (value as string).toUpperCase();
      }

      // Logic: If father deceased, guardian must be Other
      if (field === 'isFatherAlive' && value === 'Deceased') {
        updated.guardianType = 'Other';
      }
      // Logic: If guardian type changed to Father, copy Father Name to Guardian Name
      if (field === 'guardianType' && value === 'Father') {
        updated.guardianName = updated.fatherName;
        updated.guardianRelation = 'Father';
      }
      // Logic: If Father Name updates and guardian is Father, update Guardian Name
      if (field === 'fatherName' && updated.guardianType === 'Father') {
        updated.guardianName = (value as string).toUpperCase();
        updated.guardianRelation = 'Father';
      }

      return updated;
    });

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (field: keyof FormData, previewField: keyof FormData) => (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [field]: file,
          [previewField]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, [field]: null, [previewField]: null }));
    }
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  // --- Validation ---
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.studentName) newErrors.studentName = "Student Name is required";
      if (!formData.fatherName) newErrors.fatherName = "Father Name is required";
      if (!formData.studentPicture) newErrors.studentPicture = "Student Picture is required";
      if (!formData.cnic) newErrors.cnic = "CNIC/B-Form is required";
      if (formData.cnic && !/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic)) newErrors.cnic = "Invalid CNIC Format (e.g. 37405-1234567-1)";
      
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (formData.guardianType === 'Other' && !formData.guardianName) newErrors.guardianName = "Guardian Name is required";
      if (formData.guardianType === 'Other' && !formData.guardianRelation) newErrors.guardianRelation = "Relation is required";
    }

    if (currentStep === 2) {
      if (!formData.guardianCnic) newErrors.guardianCnic = "Guardian CNIC is required";
      if (formData.guardianCnic && !/^\d{5}-\d{7}-\d{1}$/.test(formData.guardianCnic)) newErrors.guardianCnic = "Invalid CNIC Format";
      if (!formData.permanentAddress) newErrors.permanentAddress = "Permanent Address is required";
      if (!formData.presentAddress) newErrors.presentAddress = "Present Address is required";
      if (!formData.whatsappNumber) newErrors.whatsappNumber = "WhatsApp Number is required";
    }

    if (currentStep === 3) {
      if (!formData.matricRollNo) newErrors.matricRollNo = "Roll No is required";
      if (!formData.matricMarksObtained) newErrors.matricMarksObtained = "Obtained Marks is required";
      if (Number(formData.matricMarksObtained) > Number(formData.matricTotalMarks)) newErrors.matricMarksObtained = "Cannot exceed Total Marks";
      if (!formData.schoolName) newErrors.schoolName = "School Name is required";
      if (!formData.boardName) newErrors.boardName = "Board Name is required";
      
      if (formData.subEnglish === '') newErrors.subEnglish = "Required";
      if (formData.subMath === '') newErrors.subMath = "Required";
      if (formData.subPhysics === '') newErrors.subPhysics = "Required";
      if (formData.subChemistry === '') newErrors.subChemistry = "Required";
      
      const subTotal = (Number(formData.subEnglish)||0) + (Number(formData.subMath)||0) + (Number(formData.subPhysics)||0) + (Number(formData.subChemistry)||0);
      if (subTotal > 600) newErrors.subChemistry = "Check Subject Marks (Total exceeds 600)";
    }

    if (currentStep === 4) {
      if (!formData.pref1) newErrors.pref1 = "First preference is required";
      if (!formData.pref2) newErrors.pref2 = "Second preference is required";
      if (!formData.pref3) newErrors.pref3 = "Third preference is required";
      if (formData.pref1 && (formData.pref1 === formData.pref2 || formData.pref1 === formData.pref3)) {
        newErrors.pref1 = "Duplicate Preference Selected";
        isValid = false;
      }
      if (formData.pref2 && (formData.pref2 === formData.pref3)) {
         newErrors.pref2 = "Duplicate Preference Selected";
         isValid = false;
      }
    }

    if (currentStep === 5) {
      if (!formData.annualIncome) newErrors.annualIncome = "Annual Income is required";
      if (!formData.guardianSignature) newErrors.guardianSignature = "Guardian Signature is required";
      if (!formData.applicantSignature) newErrors.applicantSignature = "Applicant Signature is required";
      if (!formData.agreed) newErrors.agreed = "You must agree to the undertaking";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (validateStep(5)) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- Helper Component for Input with Error ---
  const FormInput = ({ id, label, error, ...props }: any) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} className={error ? 'border-red-300' : ''} />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );

  const FormSelect = ({ id, label, options, value, onChange, error }: any) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={error ? 'border-red-300' : ''}>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt: any) => (
            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );

  const FormRadioGroup = ({ name, options, value, onChange }: any) => (
    <RadioGroup value={value} onValueChange={onChange}>
      <div className="flex gap-4">
        {options.map((opt: any) => (
          <div key={opt.value} className="flex items-center space-x-2">
            <RadioGroupItem value={opt.value} id={`${name}-${opt.value}`} />
            <Label htmlFor={`${name}-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );

  // --- Render Steps ---

  const renderStep1 = () => (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          <FormInput id="studentName" label="Student Name (Block Letters)" placeholder="MUHAMMAD ALI" value={formData.studentName} onChange={(e: any) => updateField('studentName', e.target.value)} error={errors.studentName} />
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput id="fatherName" label="Father's Name" placeholder="AHMED KHAN" value={formData.fatherName} onChange={(e: any) => updateField('fatherName', e.target.value)} error={errors.fatherName} />
            <div className="space-y-3">
              <Label>Father Status</Label>
              <FormRadioGroup 
                name="isFatherAlive" 
                options={[{label: 'Alive', value: 'Alive'}, {label: 'Deceased', value: 'Deceased'}]} 
                value={formData.isFatherAlive} 
                onChange={(v: any) => updateField('isFatherAlive', v)} 
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
             <div className="space-y-3 mb-4">
              <Label>Who is your Guardian?</Label>
              <FormRadioGroup 
                name="guardianType" 
                options={[
                  {label: 'Father', value: 'Father'}, 
                  {label: 'Other', value: 'Other'}
                ]} 
                value={formData.guardianType} 
                onChange={(v: any) => updateField('guardianType', v)} 
              />
            </div>

            <AnimatePresence>
              {(formData.guardianType === 'Other') && (
                <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="grid md:grid-cols-2 gap-6 overflow-hidden">
                  <FormInput id="guardianName" label="Guardian Name" value={formData.guardianName} onChange={(e: any) => updateField('guardianName', e.target.value)} error={errors.guardianName} />
                  <FormSelect id="guardianRelation" label="Relation" options={[{label:'Uncle', value:'Uncle'}, {label:'Brother', value:'Brother'}, {label:'Mother', value:'Mother'}, {label:'Other', value:'Other'}]} value={formData.guardianRelation} onChange={(v: any) => updateField('guardianRelation', v)} error={errors.guardianRelation} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput id="cnic" label="CNIC / B-Form (XXXXX-XXXXXXX-X)" placeholder="37405-1234567-1" value={formData.cnic} onChange={(e: any) => updateField('cnic', e.target.value)} error={errors.cnic} maxLength={15} />
            <FormInput id="dob" type="date" label="Date of Birth" value={formData.dob} onChange={(e: any) => updateField('dob', e.target.value)} error={errors.dob} />
            <FormInput id="religion" label="Religion" value={formData.religion} onChange={(e: any) => updateField('religion', e.target.value)} />
          </div>
        </div>

        <div className="md:col-span-4">
           <FileUpload 
              id="studentPicture"
              label="Student Photograph" 
              helperText="Passport Size, Blue Background. Max 2MB"
              previewUrl={formData.studentPicturePreview} 
              onChange={handleFileChange('studentPicture', 'studentPicturePreview')}
              error={errors.studentPicture}
           />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><User className="w-5 h-5 text-secondary"/> Guardian Info</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <FormInput id="guardianCnic" label="Father/Guardian CNIC" placeholder="37405-1234567-1" value={formData.guardianCnic} onChange={(e: any) => updateField('guardianCnic', e.target.value)} error={errors.guardianCnic} maxLength={15} />
          <FormInput id="guardianProfession" label="Father/Guardian Profession" value={formData.guardianProfession} onChange={(e: any) => updateField('guardianProfession', e.target.value)} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
           <h3 className="font-semibold text-slate-900 border-b pb-2">Postal Addresses</h3>
           <FormInput id="permanentAddress" label="Permanent Address" value={formData.permanentAddress} onChange={(e: any) => updateField('permanentAddress', e.target.value)} error={errors.permanentAddress} />
           <FormInput id="permanentDistrict" label="Permanent District" value={formData.permanentDistrict} onChange={(e: any) => updateField('permanentDistrict', e.target.value)} />
           <FormInput id="presentAddress" label="Present Mailing Address" value={formData.presentAddress} onChange={(e: any) => updateField('presentAddress', e.target.value)} error={errors.presentAddress} />
           <FormInput id="presentDistrict" label="Present District" value={formData.presentDistrict} onChange={(e: any) => updateField('presentDistrict', e.target.value)} />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 border-b pb-2">Contact Details</h3>
           <FormInput id="officePhone" label="Father's Tel (Office)" value={formData.officePhone} onChange={(e: any) => updateField('officePhone', e.target.value)} />
           <FormInput id="residencePhone" label="Residence Phone" value={formData.residencePhone} onChange={(e: any) => updateField('residencePhone', e.target.value)} />
           <FormInput id="whatsappNumber" label="WhatsApp Number (Important)" placeholder="0300-1234567" value={formData.whatsappNumber} onChange={(e: any) => updateField('whatsappNumber', e.target.value)} error={errors.whatsappNumber} />
           <FormInput id="studentPhone" label="Student Personal Phone" value={formData.studentPhone} onChange={(e: any) => updateField('studentPhone', e.target.value)} />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const subTotal = (Number(formData.subEnglish)||0) + (Number(formData.subMath)||0) + (Number(formData.subPhysics)||0) + (Number(formData.subChemistry)||0);

    return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
        <div>
           <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2 border-b pb-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Matric / S.S.C Details</h3>
           <div className="grid md:grid-cols-3 gap-6">
             <FormInput id="matricRollNo" label="Roll No" value={formData.matricRollNo} onChange={(e: any) => updateField('matricRollNo', e.target.value)} error={errors.matricRollNo} />
             <FormInput id="matricYear" label="Passing Year" placeholder="2023" type="number" value={formData.matricYear} onChange={(e: any) => updateField('matricYear', e.target.value)} />
             <FormInput id="matricGrade" label="Grade / Division" placeholder="A" value={formData.matricGrade} onChange={(e: any) => updateField('matricGrade', e.target.value)} />
             <FormInput id="matricMarksObtained" label="Marks Obtained" type="number" value={formData.matricMarksObtained} onChange={(e: any) => updateField('matricMarksObtained', e.target.value)} error={errors.matricMarksObtained} />
             <FormInput id="matricTotalMarks" label="Total Marks" type="number" value={formData.matricTotalMarks} onChange={(e: any) => updateField('matricTotalMarks', e.target.value)} />
             <FormInput id="registrationNumber" label="Registration No" value={formData.registrationNumber} onChange={(e: any) => updateField('registrationNumber', e.target.value)} />
             <div className="md:col-span-1"><FormInput id="schoolName" label="School / College Name" value={formData.schoolName} onChange={(e: any) => updateField('schoolName', e.target.value)} error={errors.schoolName} /></div>
             <div className="md:col-span-2"><FormInput id="boardName" label="Board / University" value={formData.boardName} onChange={(e: any) => updateField('boardName', e.target.value)} error={errors.boardName} /></div>
           </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Science Subjects (S.S.C)</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left bg-white">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Total Marks</th>
                  <th className="px-6 py-4">Marks Obtained</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {['English', 'Math', 'Physics', 'Chemistry'].map((sub) => {
                  const key = `sub${sub}` as keyof FormData;
                  return (
                    <tr key={sub}>
                      <td className="px-6 py-4 font-medium">{sub}</td>
                      <td className="px-6 py-4 text-slate-500">150</td>
                      <td className="px-6 py-2">
                         <div className="max-w-[120px]">
                           <Input 
                            type="number" 
                            placeholder="0"
                            min="0"
                            max="150"
                            value={formData[key] as number}
                            onChange={(e: any) => updateField(key, e.target.value)}
                            className={errors[key] ? 'border-red-300' : ''}
                           />
                           {errors[key] && <p className="text-xs text-red-600 mt-1">{errors[key]}</p>}
                         </div>
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-slate-50 font-bold text-slate-900">
                  <td className="px-6 py-4">Grand Total</td>
                  <td className="px-6 py-4">600</td>
                  <td className="px-6 py-4 text-secondary text-lg">{subTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <details className="group border border-slate-200 rounded-xl bg-white transition-all open:ring-2 open:ring-slate-100">
           <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors select-none">
             <span className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-slate-500" /> Intermediate / H.S.S.C Details (Optional)</span>
             <span className="transition-transform group-open:rotate-180"><ArrowRight className="w-5 h-5 rotate-90 text-slate-400" /></span>
           </summary>
           <div className="p-6 pt-2 text-slate-600 border-t border-slate-100 grid md:grid-cols-3 gap-6 animate-in slide-in-from-top-2">
              <FormInput id="interRollNo" label="Roll No" value={formData.interRollNo} onChange={(e: any) => updateField('interRollNo', e.target.value)} />
              <FormInput id="interYear" label="Passing Year" value={formData.interYear} onChange={(e: any) => updateField('interYear', e.target.value)} />
              <FormInput id="interTotalMarks" label="Total Marks" value={formData.interTotalMarks} onChange={(e: any) => updateField('interTotalMarks', e.target.value)} />
              <FormInput id="interMarksObtained" label="Obtained Marks" value={formData.interMarksObtained} onChange={(e: any) => updateField('interMarksObtained', e.target.value)} />
              <div className="md:col-span-2"><FormInput id="interCollegeName" label="College Name" value={formData.interCollegeName} onChange={(e: any) => updateField('interCollegeName', e.target.value)} /></div>
           </div>
        </details>
      </div>
    );
  };

  const renderStep4 = () => {
    const isSelected = (progId: string, currentPrefField: string) => {
      const otherPrefs = ['pref1', 'pref2', 'pref3'].filter(p => p !== currentPrefField);
      return otherPrefs.some(p => formData[p as keyof FormData] === progId);
    };

    return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="font-bold text-2xl text-slate-900">Program Preferences</h3>
          <p className="text-slate-600 mt-2">
            Select your technologies in order of preference. Admission will be granted based on merit and seat availability.
          </p>
        </div>

        <div className="space-y-6">
          {['pref1', 'pref2', 'pref3'].map((pref, idx) => (
             <Card key={pref} className={`border-2 ${errors[pref as keyof FormData] ? 'border-red-500 shadow-red-100' : 'border-slate-200 shadow-sm'}`}>
               <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Preference {idx + 1}</h4>
                    {errors[pref as keyof FormData] && <span className="text-red-500 text-xs font-bold ml-auto">{errors[pref as keyof FormData]}</span>}
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {PROGRAMS.map((prog) => {
                       const disabled = isSelected(prog.id, pref);
                       const selected = formData[pref as keyof FormData] === prog.id;
                       
                       return (
                         <div 
                           key={prog.id}
                           onClick={() => !disabled && updateField(pref as keyof FormData, prog.id)}
                           className={`
                             relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200
                             ${selected ? `${prog.border} ${prog.bg} ring-1 ring-secondary/20` : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-md'}
                             ${disabled ? 'opacity-40 grayscale cursor-not-allowed bg-slate-50' : ''}
                           `}
                         >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${selected ? 'bg-white shadow-sm' : 'bg-slate-100'}`}>
                              <prog.icon className={`w-5 h-5 ${prog.color}`} />
                            </div>
                            <div className="font-bold text-sm text-slate-900 leading-tight">{prog.name}</div>
                            {selected && <div className="absolute top-3 right-3 text-secondary animate-in zoom-in"><CheckCircle2 className="w-5 h-5 fill-current" /></div>}
                         </div>
                       );
                     })}
                  </div>
               </CardContent>
             </Card>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Important Note:</strong> Technology shifts (Morning/Evening) and sections are allotted by the Admission Committee strictly according to merit (SSC Marks). Preferences help us understand your interest but do not guarantee allocation.
          </p>
        </div>
      </div>
    );
  };

  const renderStep5 = () => (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
      <Card className="border-slate-200 bg-slate-50/50">
        <CardContent className="p-8">
           <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
              <div className="bg-slate-900 text-white p-2 rounded-lg"><FileSignature className="w-5 h-5" /></div>
              <h3 className="font-bold text-lg text-slate-900 uppercase tracking-wide">Undertaking & Declaration</h3>
           </div>
           
           <div className="prose prose-slate max-w-none text-slate-700 mb-8 text-sm">
             <ul className="grid gap-2">
               <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 mt-1 shrink-0" /> I have read the college prospectus and understood the rules/regulations.</li>
               <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 mt-1 shrink-0" /> The particulars given by me in this admission form are correct to the best of my knowledge.</li>
               <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 mt-1 shrink-0" /> I understand that the Admission Committee has the right to reject/dismiss my application if any info is found incorrect.</li>
               <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 mt-1 shrink-0" /> I promise to abide by the disciplinary rules and code of conduct of RPI.</li>
             </ul>
           </div>

           <div className="grid md:grid-cols-2 gap-8 mb-10">
             <FormInput 
                id="annualIncome" 
                label="Father's/Guardian's Annual Income (PKR)" 
                type="number" 
                placeholder="e.g. 600000" 
                value={formData.annualIncome} 
                onChange={(e: any) => updateField('annualIncome', e.target.value)} 
                error={errors.annualIncome}
             />
           </div>

           <div className="grid md:grid-cols-2 gap-8 mb-10">
             <FileUpload 
               id="applicantSignature"
               label="Upload Applicant's Signature" 
               previewUrl={formData.applicantSignaturePreview} 
               onChange={handleFileChange('applicantSignature', 'applicantSignaturePreview')}
               error={errors.applicantSignature}
             />
             <FileUpload 
               id="guardianSignature"
               label="Upload Father/Guardian's Signature" 
               previewUrl={formData.guardianSignaturePreview} 
               onChange={handleFileChange('guardianSignature', 'guardianSignaturePreview')}
               error={errors.guardianSignature}
             />
           </div>

           <label className={`flex items-start gap-4 p-5 border-2 rounded-xl transition-all cursor-pointer ${errors.agreed ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white hover:border-secondary hover:shadow-md'}`}>
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  checked={formData.agreed} 
                  onChange={(e) => updateField('agreed', e.target.checked)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-secondary checked:bg-secondary" 
                />
                <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 w-3.5 h-3.5" />
              </div>
              <span className={`text-sm font-medium leading-relaxed ${errors.agreed ? 'text-red-600' : 'text-slate-700'}`}>
                I hereby accept the undertaking above and declare that all information provided is accurate and I am liable for any disciplinary action if found otherwise.
              </span>
           </label>
        </CardContent>
      </Card>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-700">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Application Submitted!</h2>
      <p className="text-lg text-slate-600 max-w-md mb-8">
        Your admission application has been received. <br/> Your Tracking ID: <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">RPI-2024-{Math.floor(1000 + Math.random() * 9000)}</span>
      </p>
      
      <div className="bg-white border border-slate-200 rounded-xl p-6 w-full max-w-lg mb-8 text-left shadow-sm">
        <h3 className="font-bold text-slate-900 mb-4 border-b pb-2 flex justify-between items-center">
          Summary
          <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Pending Review</span>
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-dashed border-slate-100 pb-2">
            <span className="text-slate-500">Applicant</span>
            <span className="font-bold text-slate-800">{formData.studentName}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-100 pb-2">
            <span className="text-slate-500">Father Name</span>
            <span className="font-bold text-slate-800">{formData.fatherName}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-slate-100 pb-2">
            <span className="text-slate-500">CNIC</span>
            <span className="font-bold text-slate-800">{formData.cnic}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-slate-500">1st Preference</span>
            <span className="font-bold text-secondary">{PROGRAMS.find(p => p.id === formData.pref1)?.name}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button onClick={() => window.print()} variant="outline" className="gap-2 w-full sm:w-auto justify-center">
          <Printer className="w-4 h-4" /> Print Form
        </Button>
        <Button onClick={() => window.location.reload()} variant="outline" className="gap-2 w-full sm:w-auto justify-center">
          <Download className="w-4 h-4" /> Download PDF
        </Button>
        <Button onClick={onBack} className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800">Back to Home</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {!isSuccess && (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <Button variant="ghost" onClick={onBack} className="gap-2 pl-0 hover:bg-transparent hover:text-secondary text-slate-500 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back to Website
            </Button>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-slate-900 flex items-center justify-end gap-2">
                <GraduationCap className="w-6 h-6 text-secondary" /> Online Admission Form
              </h1>
              <p className="text-sm text-slate-500 font-medium">Session 2024 - 2027 • <span className="text-secondary">Merit Based</span></p>
            </div>
          </div>
        )}

        {isSuccess ? renderSuccess() : (
          <div className="grid lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-3">
              <nav className="space-y-2 sticky top-8">
                {STEPS.map((s) => {
                  const isActive = step === s.id;
                  const isCompleted = step > s.id;
                  return (
                    <div 
                      key={s.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 border ${
                        isActive 
                          ? 'bg-white shadow-lg shadow-slate-200/50 border-secondary scale-105' 
                          : isCompleted 
                            ? 'bg-white border-slate-200 opacity-60' 
                            : 'bg-transparent border-transparent opacity-40'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        isActive 
                          ? 'bg-secondary text-white shadow-md' 
                          : isCompleted 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-slate-200 text-slate-500'
                      }`}>
                         {isCompleted ? <Check className="w-5 h-5" /> : s.id}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{s.title}</span>
                        {isActive && <span className="text-[10px] text-secondary font-medium animate-pulse">In Progress</span>}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="lg:col-span-9">
              <Card className="border-0 shadow-xl bg-white overflow-hidden rounded-2xl">
                <div className="h-1.5 w-full bg-slate-100">
                  <motion.div 
                    className="h-full bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <CardContent className="p-6 md:p-10">
                  <div className="mb-8 pb-6 border-b border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-secondary border border-slate-100 shadow-sm">
                       {React.createElement(STEPS[step-1].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {step} of 5</span>
                       <h2 className="text-2xl font-bold text-slate-900">{STEPS[step-1].title}</h2>
                    </div>
                  </div>

                  <div className="min-h-[400px]">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderStep5()}
                  </div>

                  <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
                    <Button 
                      variant="outline" 
                      onClick={handleBack} 
                      disabled={step === 1 || isSubmitting}
                      className="w-32 hover:bg-slate-50 border-slate-200 text-slate-600"
                    >
                      Previous
                    </Button>

                    {step < 5 ? (
                      <Button onClick={handleNext} className="w-36 bg-slate-900 hover:bg-slate-800 text-white gap-2 shadow-lg hover:shadow-xl transition-all">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit} disabled={isSubmitting} className="w-48 bg-secondary hover:bg-green-700 text-white gap-2 shadow-lg shadow-green-200 hover:shadow-green-300 transition-all font-bold">
                        {isSubmitting ? 'Submitting...' : 'Submit Application'} 
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 text-center text-slate-400 text-xs">
                Need help? Contact Admission Office at <span className="font-bold text-slate-600">051-1234567</span> or <a href="#" className="underline hover:text-secondary">support@rpi.edu.pk</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
