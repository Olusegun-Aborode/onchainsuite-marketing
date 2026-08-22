"use client";

// Lets a visitor save any legal page as a PDF via the browser's print dialog
// (Save as PDF). No backend needed; print CSS in LegalShell strips the chrome.
export default function LegalDownload() {
  return (
    <button type="button" className="ocs-legal-download" onClick={() => window.print()}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </button>
  );
}
