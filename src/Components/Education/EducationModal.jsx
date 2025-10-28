import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const EducationModal = ({ open, onClose, data }) => {
  // Dynamically build fields and skip "-" values
  const educationDetails = [
    { label: "University", value: data.university },
    { label: "College", value: data.college },
    {
      label: "Year of Research",
      value: data.yearOfPassing || data.yearOfResearch,
    },
    { label: "Research Title", value: data.researchTitle },
    { label: "Guide Name", value: data.guideName },
    { label: "Research Description", value: data.researchDescription },
  ].filter((item) => item.value && item.value !== "-");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass-strong glow border-2 border-primary/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-glow text-center mb-6">
            {data.fullForm}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src={data.image}
                alt={data.degree}
                className="w-full h-90 object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-5 text-foreground">
              {educationDetails.map((item, index) => (
                <li
                  key={index}
                  className={`text-md ${
                    item.label === "Research Description" ? "text-justify" : ""
                  }`}
                >
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
