// Icons.jsx — inline SVG icon set (lucide-style)
function Icon({ children, size = 20, strokeWidth = 1.75, className = "", style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ArrowRight = (p) => (<Icon {...p}><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></Icon>);
const ArrowUpRight = (p) => (<Icon {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></Icon>);
const Plus = (p) => (<Icon {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Icon>);
const Menu = (p) => (<Icon {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="17" x2="20" y2="17" /></Icon>);
const X = (p) => (<Icon {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>);
const Play = (p) => (<Icon {...p}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" /></Icon>);
const Clock = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>);
const Mail = (p) => (<Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></Icon>);
const Instagram = (p) => (<Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></Icon>);
const Linkedin = (p) => (<Icon {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Icon>);
const ChevronLeft = (p) => (<Icon {...p}><polyline points="15 6 9 12 15 18" /></Icon>);
const ChevronRight = (p) => (<Icon {...p}><polyline points="9 6 15 12 9 18" /></Icon>);
const Heart = (p) => (<Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></Icon>);

window.ClasicoIcons = { ArrowRight, ArrowUpRight, Plus, Menu, X, Play, Clock, Mail, Instagram, Linkedin, ChevronLeft, ChevronRight, Heart };
