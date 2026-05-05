// import { useState } from "react";
// import Header from "../components/Header";
// import SidebarStepper from "../components/SidebarStepper";
// import VerificationList from "../components/VerificationList";
// import ActionButtons from "../components/ActionButtons";
// import AddressStep from "../components/address/AddressStep";
// import IdDetails from "../components/IdDetails";
// import Employment from "../components/employment/Employment";
// import Education from "../components/education/Education";
// import DrugTestStep from "../components/drug/DrugTestStep";
// import CriminalCheck from "../components/criminal/CriminalCheck";
// import ReferenceCheck from "../components/reference/ReferenceCheck";
// import ReviewSubmit from "../components/review/ReviewSubmit";
// // import ReviewContent from "../components/review/ReviewContent";


// export default function VerificationPage() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     if (currentStep < 8) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f4ff]">
//       {/* Header */}
//       <Header />

//       {/* Main Layout */}
//       <div className="grid grid-cols-[230px_1fr] gap-8 p-6">
        
//         {/* Sidebar */}
//         <SidebarStepper
//           currentStep={currentStep}
//           onStepBack={handleBack}
//         />

//         {/* Right Content */}
//         <div className="ml-36">

//           {/* STEP 1 : Consent */}
//           {currentStep === 0 && (
//             <main className="bg-white rounded-2xl shadow-sm p-8 max-w-5xl">
              
//               <div className="w-14 h-14 rounded-full bg-green-500 text-green-900 flex items-center justify-center text-2xl mx-auto">
//                 ✓
//               </div>

//               <h1 className="text-center text-2xl font-bold text-indigo-700 mt-4">
//                 Consent for Background Verification
//               </h1>

//               <p className="text-center text-sm text-gray-700 mt-2">
//                 Please review and provide consent for the following verification checks
//               </p>

//               <p className="mt-8 text-sm text-gray-700">
//                 We will collect and verify the following information:
//               </p>

//               <VerificationList />

//               <ActionButtons
//                 onNext={handleNext}
//                 onBack={handleBack}
//               />

//               <p className="text-[14px] text-center text-gray-700 mt-5">
//                 By providing consent, you agree to our Privacy Policy and Terms of Service.
//               </p>
//             </main>
//           )}

//           {/* STEP 2 : Address */}
//           {currentStep === 1 && (
//             <AddressStep onNext={handleNext} />
//           )}

//           {currentStep === 2 && (
//             <IdDetails onNext={handleNext} />
//           )}
//           {currentStep === 3 && (
//             <Employment onNext={handleNext} />
//           )}
//           {currentStep === 4 && (
//             <Education onNext={handleNext} />
//           )}
//           {currentStep === 5 && (
//             <DrugTestStep onNext={handleNext} />
//           )}
//           {currentStep === 6 && (
//             <CriminalCheck onNext={handleNext} />
//           )}
//           {currentStep === 7 && (
//             <ReferenceCheck onNext={handleNext} />
//           )}
//           {currentStep === 8 && (
//             <ReviewSubmit onNext={handleNext} />
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Header from "../components/Header";
import SidebarStepper from "../components/SidebarStepper";
import VerificationList from "../components/VerificationList";
import ActionButtons from "../components/ActionButtons";
import AddressStep from "../components/address/AddressStep";
import IdDetails from "../components/IdDetails";
import Employment from "../components/employment/Employment";
import Education from "../components/education/Education";
import DrugTestStep from "../components/drug/DrugTestStep";
import CriminalCheck from "../components/criminal/CriminalCheck";
import ReferenceCheck from "../components/reference/ReferenceCheck";
import ReviewSubmit from "../components/review/ReviewSubmit";

export default function VerificationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4ff]">
      <Header />

      <div className="grid grid-cols-[230px_1fr] gap-8 p-6">
        
        {/* Sidebar */}
        <SidebarStepper
          currentStep={currentStep}
          onStepBack={handleBack}
          onStepClick={setCurrentStep}   // ✅ THIS FIXES EVERYTHING
        />

        {/* Content */}
        <div className="ml-36">

          {/* STEP 1 */}
          {currentStep === 0 && (
            <main className="bg-white rounded-2xl shadow-sm p-8 max-w-5xl">
              
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl mx-auto">
                ✓
              </div>

              <h1 className="text-center text-2xl font-bold text-indigo-700 mt-4">
                Consent for Background Verification
              </h1>

              <p className="text-center text-sm text-gray-700 mt-2">
                Please review and provide consent
              </p>

              <VerificationList />

              <ActionButtons
                onNext={handleNext}
                onBack={handleBack}
              />
            </main>
          )}

          {currentStep === 1 && <AddressStep onNext={handleNext} />}
          {currentStep === 2 && <IdDetails onNext={handleNext} />}
          {currentStep === 3 && <Employment onNext={handleNext} />}
          {currentStep === 4 && <Education onNext={handleNext} />}
          {currentStep === 5 && <DrugTestStep onNext={handleNext} />}
          {currentStep === 6 && <CriminalCheck onNext={handleNext} />}
          {currentStep === 7 && <ReferenceCheck onNext={handleNext} />}
          {currentStep === 8 && <ReviewSubmit onNext={handleNext} />}

        </div>
      </div>
    </div>
  );
}