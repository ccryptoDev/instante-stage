import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../../../atoms/Container";
import { H3 } from "../../../atoms/Typography";
import { routes } from "../../../../routes/Application/routes";

const Wrapper = styled.section`
  background: var(--color-bg-2);
  padding: 6rem 0;

  .loans-section {
    &-clarification {
      &-heading {
        text-align: center;
        margin-bottom: 4.8rem;
        font-size: 2rem;
      }

      &-note {
        padding: 2.4rem;
        background: #fff;
        border-radius: 1.4rem;
        border: 1px solid var(--color-secondary-1);
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
      }
    }
  }
  .paragraph {
    font-size: 1.4rem;
  }

  .modal {
    display: inline-block;
  }
`;

const Section = () => {
  return (
    <Wrapper className="loans-section-clarification">
      <Container>
        <H3 className="loans-section-clarification-heading">
          This is an expensive form of borrowing, and it is intended to be a
          short-term bridge, not a long-term financial solution.
        </H3>
        <ul className="loans-section-clarification-note">
          <li>
            <p>
              The Tonto Apache Tribe Consumer Finance Services Regulatory
              Commission is the regulatory agency solely responsible for
              regulation of Istante Lending. Istante Lending is a tribal lending
              entity wholly-owned by the Tonto Apache Tribe, a sovereign nation
              located within the United States of America. Istante Lending LLC
              is{" "}
              <Link to={routes.LICENSE} className="link underline">
                licensed
              </Link>{" "}
              and regulated under the Tonto Apache Tribal Consumer Financial
              Services Ordinance. To get a copy of the ordinance please contact
              us at{" "}
              <a
                href="mailto:CustomerCare@IstanteLending.com"
                className="link underline"
              >
                CustomerCare@IstanteLending.com
              </a>
            </p>
          </li>
          <li>
            <p>
              Please visit our{" "}
              <Link to="/faq" className="link">
                FAQ
              </Link>{" "}
              for specific information on application cut-off and processing
              times, our disbursement options, and when loan funds may become
              available for your use. Generally, business days means Monday
              through Friday, and we do not fund loans via ACH on federal
              holidays or weekends. If you selected wire transfer or direct
              deposit and have a valid account at a qualifying bank, same
              business-day funding may be available. We do not charge a fee to
              disburse funds by ACH, but your bank may assess a fee. Consult
              with your bank on their fee schedules and posting requirements. If
              you selected funding by check, your loan proceeds will be
              delivered by regular mail through the U.S. postal system. You
              should allow 7 to 10 days for delivery of the loan proceeds.
            </p>
          </li>
          <li>
            <p>
              Our loans are subject to terms and conditions. Not all applicants
              will qualify for a loan. Loans are not available in CT, DC, GA,
              MD, NC, NJ, NY, PA, RI, SC, VA, VT, WV or any US territories or
              Gila County, AZ. New customers must be able to satisfy eligibility
              requirements for underwriting approval. Returning customers who
              have received a pre-approved offer or offer code must continue to
              be able to satisfy the preselection criteria as shown in their
              offer.
            </p>
          </li>
          <li>
            <div className="paragraph">
              Applicants must authorize us to verify any information provided
              for identity and digital verification, underwriting, and credit
              reporting. Verification and reporting may be ongoing and may
              require us to obtain information about you from, and share your
              information with, consumer reporting agencies and other sources.
              For more information, including applying for a loan, you should
              read our{" "}
              <Link
                to={routes.PRIVACY_NOTICE}
                target="_blank"
                className="link underline"
              >
                Privacy Notice
              </Link>
              , which governs our information sharing practices, and our{" "}
              <Link
                to={routes.TERMS_OF_USE}
                target="_blank"
                className="link underline"
              >
                Terms of Use
              </Link>
              , which governs your use of our website.
            </div>
          </li>
          <li>
            <p>
              Istante Lending is an equal opportunity lender that is
              wholly-owned by the{" "}
              <Link to="about" className="link">
                {" "}
                Tonto Apache Tribe
              </Link>
              , and licensed by the Tonto Apache Consumer Finance Services
              Regulatory Commission pursuant to the Tonto Apache Tribal Consumer
              Financial Services Ordinance .
            </p>
          </li>
          <li>
            <p>
              © 2022 Istante Lending, Tonto Apache Reservation #30 Payson, AZ
              85541
            </p>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Section;
