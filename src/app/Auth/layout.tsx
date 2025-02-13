import Navbar from "@/components/navbar/Navbar"

export default function AuthLayout({children}:{children: React.ReactNode}) {
  return (
    <>
    <Navbar/>
    <div>
      {children}
    </div>
    </>
  );
}