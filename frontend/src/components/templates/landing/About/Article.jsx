import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../atoms/Container";
import { H3 } from "../../../atoms/Typography";
import Button from "../../../atoms/Buttons/Button";
import coinFront from "../../../../assets/landing/history/coin-front.png";
import coinBack from "../../../../assets/landing/history/coin-back.png";
import coinTonto from "../../../../assets/landing/history/coin-tonto.png";
import mazatzalLg from "../../../../assets/landing/history/mazatzal-lg.png";
import mazatzalSm from "../../../../assets/landing/history/mazatzal-sm.png";

const Wrapper = styled.section`
  background: var(--color-bg-2);
  padding-top: 6rem;

  .paragraph-wrapper {
    display: flex;
    column-gap: 2.4rem;
  }

  .column-space-between {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .align-center {
    display: flex;
    align-items: center;
  }

  .image-description {
    font-size: 10px;
  }
  & .about-section-history {
    background: var(--color-bg-2);
    & p {
      line-height: 1.3;
    }
    & h3 {
      margin-bottom: 4.8rem;
      text-align: center;
    }
    &-content {
      &-layout {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
        max-height: 53rem;
        overflow: hidden;
        transition: all 0.3s;

        &.show {
          max-height: initial;
        }
      }
      &-expend {
        position: absolute;
        top: 9rem;
        width: 100%;
        box-sizing: border-box;

        &-shadow {
          background: linear-gradient(
            180deg,
            rgba(249, 249, 249, 0) 0%,
            var(--color-bg-2) 100%
          );
          height: 100px;
        }
        & .button-wrapper {
          background: var(--color-bg-2);
          padding: 2rem;
          display: flex;
          justify-content: center;

          & .button-inverted {
            border: 1px solid var(--color-blue-1);
          }
        }
      }
    }

    .contact-link {
      padding: 4.8rem 0 6rem;
      text-align: center;
      font-size: 1.4rem;
      &,
      & a {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .about-section-cards-layout,
    .about-section-history-content-layout {
      display: flex;
      flex-direction: column;
    }

    .about-section-banner {
      height: auto;
      padding: 4rem 0;
    }

    .about-section-history-content-expend {
      top: 20%;
    }
  }

  @media screen and (max-width: 600px) {
    .about-section-history-footer {
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }
`;

const Article = ({ articleExpanded = false, articleRef }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper ref={articleRef}>
      <Container className="about-section-history ">
        <div className="about-section-history-layout">
          <H3>Tonto Apache Tribe History</H3>
          <div className="about-section-history-content">
            <div
              className={`about-section-history-content-layout ${
                open || articleExpanded ? "show" : ""
              }`}
            >
              <div className="paragraph-wrapper">
                <p>
                  The Tonto Apache Tribe are the direct descendants of the
                  Dilzhe’e Apaches who lived in the Payson vicinity long before
                  the arrival of the Europeans. During the first reservation
                  era, they were moved to the large Rio Verde Reserve, near Camp
                  Verde, which was established in 1871 for the Tonto and
                  Wipukepa or Northwestern Yavapai. The Reserve was dissolved in
                  1875 and they were forced to move to the San Carlos Apache
                  Reservation. After Geronimo was captured in 1886, the San
                  Carlos reservation was no longer under guard and the Tonto
                  Apaches were free to return to their Mogollon Rim Country
                  home. The Tonto gradually returned to Payson with their
                  Yavapai allies and relatives to the Camp Verde Reservation to
                  form the Yavapai-Apache Nation of today.
                </p>
                <p>
                  The Tonto Apache Tribe is located adjacent to the town of
                  Payson, Arizona – originally named Te-go-suk, “Place of the
                  Yellow Water”. The Tonto Apache Tribe was federally recognized
                  and established as an Indian Reservation by Congressional Act
                  on October 6, 1972. It consisted of 85 acres which was
                  provided to them by past legislation which made it the
                  smallest reservation in the state of Arizona by acreage. The
                  Tonto Apaches also signed an Initiative of Agreement with the
                  U.S. Forest Service in 1999 that provided the tribe with 272
                  additional acres in 2017 through a federal land exchange. The
                  land will be used to provide much-needed homes for the
                  tribe&apos;s young people and their families.
                </p>
              </div>

              {open || articleExpanded ? (
                <div className="paragraph-wrapper">
                  <div className="paragraph-wrapper">
                    <div>
                      <img src={coinFront} alt="front" />
                    </div>
                    <div>
                      <img src={coinBack} alt="back" />
                    </div>
                  </div>
                  <p>
                    The tribe was recognized as part of the military Code
                    Talkers and a coin was pressed by the U.S. Mint in
                    recognition. This medal is a bronze duplicate of the
                    Congressional Gold Medal awarded to Tonto Apache Tribe Code
                    Talkers at a ceremony at the U.S. Capitol Building on
                    November 20, 2013, in recognition of their dedication and
                    valor in the United States&apos; war effort during World War
                    II.
                  </p>
                </div>
              ) : (
                ""
              )}

              {open || articleExpanded ? (
                <div className="paragraph-wrapper">
                  <div className="column-space-between ">
                    <p>
                      The Tonto Apache Tribe is a generous and giving people who
                      work hard to support their reservation and the greater
                      Payson, AZ community. The Mazatzal Casino on the Tonto
                      Apache Reservation is the largest non-governmental
                      employer in Payson employing over three hundred people.
                      Revenues generated by the Mazatzal Casino are used to
                      provide much-needed housing, establish scholarship funds,
                      and generally improve the health, education, and welfare
                      of the Tonto Apache people, pumping millions of dollars
                      into the Town of Payson&apos;s economy.{" "}
                    </p>
                    <p>
                      The Tribe also operates a primary care health facility
                      that includes family-oriented care; wellness exams; sports
                      physicals; women&apos;s wellness; lab and blood testing;
                      medication management; and non-emergency outpatient care.
                      The clinic also offers COVID-19 testing; referrals for
                      diagnostics and therapies; and patient education. It is
                      open to the residents of the reservation and the greater
                      Payson, AZ community.
                    </p>
                  </div>
                  <img src={mazatzalSm} alt="mazatzal" />
                </div>
              ) : (
                <img src={mazatzalLg} alt="mazatzal" />
              )}

              <div className="paragraph-wrapper align-center mb-60">
                <p>
                  The United States recognizes a government-to-government
                  relationship with the Tribe and the Tribe exists politically
                  in a &quot;domestic dependent nation&quot; status. As such,
                  the Tonto Apache Tribe is a sovereign nation located within
                  Arizona and the United States.{" "}
                </p>
                <div>
                  <img src={coinTonto} alt="tonto" />
                </div>
              </div>

              {!open && !articleExpanded ? (
                <div className="about-section-history-content-expend">
                  <div className="about-section-history-content-expend-shadow" />
                  <div className="button-wrapper">
                    <Button
                      className="button-inverted"
                      variant="secondary"
                      type="button"
                      onClick={() => setOpen(true)}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Article;
