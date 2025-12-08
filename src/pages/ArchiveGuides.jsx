function ArchiveGuides() {
  return (
    <div className="grid-cell">
      <div className="content">
        <span className="title">~/archive/guides</span>
        <div>
          <br />
        </div>
        <div className="archive-guides__body">
          {/* Main Header */}
          <div className="archive-guides__main-header">
            Complete Guide for Name & Gender Marker Change
          </div>

          {/* Phase 0 */}
          <div className="archive-guides__phase-title archive-guides__phase-title--first">
            Phase 0: Obtain Court Order
          </div>
          <div>• Required Forms to File:</div>
          <div className="archive-guides__indent">
            - NC-125 (Name and Gender Change Petition)
            <br />
            - NC-330 (Attachment to Petition - Confidential)
            <br />
            - CM-010 (Civil Case Cover Sheet)
            <br />
            - NC-300 (Order to Show Cause)
            <br />
            - FW-001 (Information Sheet for Family Law Facilitator Review)
            <br />
            - FW-003 (Fee Waiver Request, if applicable)
            <br />- NC-110 (Name Change Order - Judgment)
          </div>
          <div>
            • Action: Go to your local civil/family court to file these forms.
          </div>
          <div>
            • Wait Time: For court order approval and mailing (~2-3 months).
          </div>
          <div>
            • Action: Once approved, return to the court to obtain 4-5 official,
            certified copies.
          </div>

          <hr className="archive-guides__hr" />

          {/* Phase 1 */}
          <div className="archive-guides__phase-title">
            Phase 1: Update Birth Certificate
          </div>
          <div className="archive-guides__phase-subtitle">
            (Your current step)
          </div>
          <div>• Required Documents:</div>
          <div className="archive-guides__indent">
            - Certified Court Order
            <br />
            - VS 24B form (Application to Amend a Birth Record)
            <br />
            - VS 20 form (Affidavit for Correction, with notarized signature)
            <br />
            - Photocopy of your ID and original birth certificate
            <br />- $26 check or money order payable to "CDPH Vital Records"
          </div>
          <div>
            • Send To: California Department of Public Health - Vital Records
          </div>

          <hr className="archive-guides__hr" />

          {/* Phase 2 */}
          <div className="archive-guides__phase-title">
            Phase 2: Update U.S. Passport
          </div>
          <div className="archive-guides__phase-subtitle">
            (Can be started without new birth certificate)
          </div>
          <div>• Required Documents:</div>
          <div className="archive-guides__indent">
            - Certified Court Order
            <br />
            - Form DS-11 (Application for U.S. Passport)
            <br />
            - Your current passport
            <br />
            - Parent/Guardian ID
            <br />- Parent/Guardian must accompany you to apply in person
          </div>
          <div>• Wait Time: For approval and mailing (~2-3 months).</div>

          <hr className="archive-guides__hr" />

          {/* Phase 3 */}
          <div className="archive-guides__phase-title">
            Phase 3: Update Social Security Card
          </div>
          <div>• Required Documents:</div>
          <div className="archive-guides__indent">
            - Certified Court Order
            <br />
            - Form SS-5 (Application for Social Security Card)
            <br />- Your new Birth Certificate (from Phase 1)
          </div>
          <div>• Action: Submit in person at a Social Security office.</div>
          <div>
            • Wait Time: For systems to update (~2 weeks). Delay other updates
            until complete.
          </div>

          <hr className="archive-guides__hr" />

          {/* Phase 4 */}
          <div className="archive-guides__phase-title">
            Phase 4: Update Driver's License/State ID
          </div>
          <div>• Required Documents:</div>
          <div className="archive-guides__indent">
            - Proof of Identity: New Passport or New Birth Certificate
            <br />
            - Proof of CA Residency: 2 documents (e.g., utility bills, insurance
            docs, official mail)
            <br />- Social Security Number: Must match your updated name/gender
            (no card needed, but ensure Phase 3 is complete)
          </div>

          <hr className="archive-guides__hr archive-guides__hr--solid" />
        </div>
      </div>
    </div>
  );
}

export default ArchiveGuides;
