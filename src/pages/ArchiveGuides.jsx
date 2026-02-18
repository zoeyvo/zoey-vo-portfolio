function ArchiveGuides() {
  return (
    <div className="grid-cell">
      <div className="content" style={{ paddingBottom: "4rem" }}>
        <span className="title">~/archive/guides</span>
        <div>
          <br />
        </div>

        <div className="archive-guides-body">
          {/* Main Header */}
          <div className="archive-guides-main-header">
            Complete Guide for Name & Gender Marker Change (CA 2025)
          </div>

          {/* Reference Link */}
          <div className="archive-guides-reference-link">
            <strong>Reference Resource:</strong> <br></br>
            <a
              href="https://mydoctor.kaiserpermanente.org/ncal/article/adult-name-only-or-name-and-gender-change-eba-gender-affirming-care-2413679"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaiser Permanente Guide - 18+ Name and/or Gender Change
            </a>
          </div>

          <hr className="archive-guides-hr" />

          {/* Phase 0: Obtain Court Order */}
          <div className="archive-guides-phase-title archive-guides-phase-title-first">
            Phase 0: Obtain Court Order
          </div>
          <div className="archive-guides-section">
            <strong>Required Forms to File:</strong>
            <ol className="archive-guides-numbered-list">
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/nc125.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NC-125 (Name and Gender Change Petition)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/nc330.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NC-330 (Attachment to Petition - Confidential)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/cm010.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CM-010 (Civil Case Cover Sheet)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/nc300.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NC-300 (Order to Show Cause)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/fw001.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FW-001 (Information Sheet for Family Law Facilitator Review)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/fw003.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FW-003 (Fee Waiver Request, if applicable)
                </a>
              </li>
              <li>
                <a
                  href="https://www.courts.ca.gov/documents/nc110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NC-110 (Name Change Order - Judgment)
                </a>
              </li>
            </ol>
          </div>

          <div className="archive-guides-steps">
            <div>1. File these forms at your local civil or family court.</div>
            <div>
              <span className="archive-guides-error">
                <strong>WAIT TO PROCEED:</strong> Allow ~2-3 months for court
                approval and arrival.
              </span>
            </div>
            <div>
              2. Return to court to obtain 4-5 certified copies of your order.
            </div>
          </div>

          <hr className="archive-guides-hr" />

          {/* Phase 1: Update Social Security Card */}
          <div className="archive-guides-phase-title">
            Phase 1: Update Social Security Card (NAME ONLY)
          </div>
          <div className="archive-guides-section">
            <strong>Required Documents:</strong>
            <ol className="archive-guides-numbered-list">
              <li>Certified Court Order</li>
              <li>
                <a
                  href="https://www.ssa.gov/forms/ss-5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Form SS-5 (Application for Social Security Card)
                </a>
              </li>
            </ol>
          </div>

          <div className="archive-guides-steps">
            <div>
              Submit these documents in person at a Social Security office.
            </div>
            <span className="archive-guides-error">
              <strong>WAIT TO PROCEED:</strong> Allow ~2 weeks for record
              updates and new card delivery.
            </span>
          </div>

          <hr className="archive-guides-hr" />

          {/* Phase 2: Update Birth Certificate */}
          <div className="archive-guides-phase-title">
            Phase 2: Update Birth Certificate
          </div>

          <div className="archive-guides-section">
            <strong>Required Documents:</strong>
            <ol className="archive-guides-numbered-list">
              <li>Certified Court Order</li>
              <li>
                <a
                  href="https://www.cdph.ca.gov/CDPH%20Document%20Library/ControlledForms/VS24B.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VS 24B (Application to Amend a Birth Record)
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdph.ca.gov/CDPH%20Document%20Library/ControlledForms/VS20.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VS 20 (With notarized signature)
                </a>
              </li>
              <li>Photocopy of your ID and original birth certificate</li>
              <li>$26 check/money order payable to "CDPH Vital Records"</li>
            </ol>

            <div className="archive-guides-mailing-info">
              <strong>Send by Certified Mail to:</strong>
              <div
                className="archive-guides-reference-link"
                style={{ marginTop: "0.5rem", whiteSpace: "pre-line" }}
              >
                California Dept of Public Health Vital Records MS 5103
                <br />
                PO Box 997410
                <br />
                Sacramento, CA 95899-7410
              </div>
            </div>
          </div>

          <div className="archive-guides-steps">
            <span className="archive-guides-error">
              <strong>WAIT TO PROCEED:</strong> Processing takes 2-3 months for
              approval, plus 3-6 weeks for document delivery.
            </span>
          </div>

          <hr className="archive-guides-hr" />

          {/* Phase 3: Update Driver's License/State ID */}
          <div className="archive-guides-phase-title">
            Phase 3: Update Driver's License/State ID
          </div>

          <div className="archive-guides-section">
            <strong>Required Documents:</strong>
            <ol className="archive-guides-numbered-list">
              <li>Proof of Identity: New Passport or New Birth Certificate</li>
              <li>
                Proof of CA Residency: 2 documents (utility bills, insurance,
                official mail)
              </li>
              <li>Social Security Number</li>
            </ol>

            <div>
              <strong>Apply on:</strong>{" "}
              <a
                href="https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/updating-information-on-your-driver-license-or-identification-dl-id-card/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CA DMV Website - Updating Information
              </a>
            </div>

            <div className="archive-guides-note">
              After online application, complete in-person at DMV office. Pay
              $37 for new card and take new photo.
            </div>
          </div>

          <div className="archive-guides-steps">
            <span className="archive-guides-error">
              <strong>WAIT TO PROCEED:</strong> Card mailing takes ~10 days;
              interim paper version provided.
            </span>
          </div>

          <hr className="archive-guides-hr" />

          {/* Phase 4: Update U.S. Passport */}
          <div className="archive-guides-phase-title">
            Phase 4: Update U.S. Passport
          </div>

          <div className="archive-guides-section">
            <strong>Required Documents:</strong>
            <ol className="archive-guides-numbered-list">
              <li>Certified Court Order</li>
              <li>
                <a
                  href="https://eforms.state.gov/Forms/ds11_pdf.PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Form DS-11 (Application for U.S. Passport)
                </a>
              </li>
              <li>Current passport</li>
              <li>
                $130 check/money order payable to "U.S. Department of State"
              </li>
            </ol>
            <div className="archive-guides-note">
              Submit at passport acceptance facility (e.g., post office). Take
              photo and pay fee in person.
            </div>
          </div>

          <div className="archive-guides-steps">
            <span className="archive-guides-error">
              <strong>WAIT TO PROCEED:</strong> Processing takes 2-3 months for
              approval, plus 3-6 weeks for document delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveGuides;

