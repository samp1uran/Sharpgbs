import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, Settings } from "lucide-react";

const services = [
  {
    title: "Financial Services",
    description: "Maintain accurate financial records and reports.",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/services/financialServices",
  },
  {
    title: "Development",
    description: "Manage website updates, themes, and plugins.",
    icon: <Settings className="h-6 w-6" />,
    link: "/services/development",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {services.map(({ title, description, icon, link }) => (
        <Link
          key={link}
          to={link}
          className="group flex min-h-40 items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-offset-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
            {icon}
          </span>
          <span className="flex-1">
            <span className="flex items-center justify-between gap-3 font-semibold text-slate-900">
              {title}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-700"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-slate-600">
              {description}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
