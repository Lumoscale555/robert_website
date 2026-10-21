import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center", padding: "40px" }}>
      <div>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "12px" }}>Page Not Found</h2>
        <p style={{ color: "#666", marginBottom: "24px" }}>The requested page could not be located.</p>
        <Link href="/" style={{ padding: "12px 24px", background: "#17231e", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
