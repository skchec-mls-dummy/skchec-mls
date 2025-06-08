
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SKCHEC MLS</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/brief-history"><Button variant="ghost">Brief History</Button></Link>
          <Link to="/mission-vision"><Button variant="ghost">Mission & Vision</Button></Link>
          <Link to="/principal-welcome"><Button variant="ghost">Principal's Welcome</Button></Link>
          <Link to="/faculty-staff"><Button variant="ghost">Faculty & Staff</Button></Link>
          <Link to="/curriculum"><Button variant="ghost">Curriculum</Button></Link>
          <Link to="/subject-streams"><Button variant="ghost">Subject Streams</Button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
