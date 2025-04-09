import React from 'react';
import styled from 'styled-components';
import Image2 from '../../assets/services_imgs/img_02.webp';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 80px 24px 100px;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #1d1d1f;
  line-height: 1.75;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Title = styled.h1`
  font-size: 27px;
  margin-bottom: 15px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const SectionRight = styled(Section)`
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextOnlySection = styled.div`
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const TextContent = styled.div`
  flex: 1.5;
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

const Paragraph = styled.p`
  font-size: 1.07rem;
  margin-bottom: 15px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const WrongfulPage = () => {
  return (
    <>
      <Container>
        <TextOnlySection>
          <TextContent>
            <Title>WRONGFUL DEATH ATTORNEY</Title>
            <Paragraph>
              Losing a loved one is never easy, but it is even more difficult
              when their death was caused by the negligence or wrongful act of
              someone else. If you find yourself in this situation, you may be
              entitled to compensation under California law through a wrongful
              death claim.
            </Paragraph>
            <Paragraph>
              A wrongful death claim is a civil lawsuit that can be filed by the
              survivors of the deceased or by a personal representative of the
              decedent’s estate. The purpose of this claim is to seek monetary
              damages from the party responsible for the wrongful death. If
              successful, the court will order the defendant to pay damages to
              the family of the deceased.
            </Paragraph>
            <Paragraph>
              However, it is important to note that filing a wrongful death
              claim is not a straightforward process. In California, there are
              specific procedures and requirements that must be followed in
              order to prove that someone is legally responsible for the
              wrongful death and financially liable for its consequences.
            </Paragraph>
            <Paragraph>
              Wrongful death can occur in a variety of situations, including
              driving-related fatalities, medical errors, workplace accidents,
              and other instances of negligence, gross negligence, recklessness,
              or intentional acts. Some other examples include the death of
              pedestrians, DUI accidents, drowning, slips or falls, murder,
              assault, and the abuse of the elderly or children.
            </Paragraph>
            <Paragraph>
              According to the wrongful death statistics for the U.S. in 2017,
              6% of total deaths amounted to 169,936 lives lost. This makes
              wrongful death the fourth leading cause of death in the country.
            </Paragraph>
            <Paragraph>
              If you have lost a loved one due to wrongful death, it is
              important to seek the advice of an experienced wrongful death
              attorney. They can help guide you through the legal process and
              ensure that your rights are protected.
            </Paragraph>

            <Title>HOW TO PROCEED IN CASE OF A WRONGFUL DEATH?</Title>
            <Paragraph>
              If you have lost a loved one due to wrongful death, there are
              several steps you can take to protect your rights and seek
              compensation for your associated financial losses. Here are some
              key steps to follow:
            </Paragraph>
            <Paragraph>
              <strong>
                Consult with an experienced wrongful death attorney:
              </strong>{' '}
              The first step in pursuing a wrongful death claim is to seek the
              advice of an experienced attorney who specializes in this area of
              law. They can help you understand your legal rights, navigate the
              complex legal process, and advocate for your interests in court.
            </Paragraph>
            <Paragraph>
              <strong>Gather evidence:</strong> Your attorney will work with you
              to gather evidence that supports your claim, including police
              reports, witness statements, medical records, and other relevant
              documentation. This evidence can help establish the cause of your
              loved one's death and prove that someone else was responsible.
            </Paragraph>
            <Paragraph>
              <strong>Identify the liable party:</strong> Your attorney will
              work with you to identify the party or parties who are legally
              responsible for your loved one's death. This may include
              individuals, companies, or government entities.
            </Paragraph>
            <Paragraph>
              <strong>File a claim:</strong> Once you have identified the liable
              party, your attorney will file a claim on your behalf. This will
              initiate the legal process and allow you to seek compensation for
              your financial losses.
            </Paragraph>
            <Paragraph>
              <strong>Negotiate a settlement:</strong> In many cases, the liable
              party may be willing to negotiate a settlement outside of court.
              Your attorney can work with the other side to reach a fair and
              reasonable settlement that compensates you for your losses.
            </Paragraph>
            <Paragraph>
              <strong>Go to trial:</strong> If a settlement cannot be reached,
              your attorney may recommend taking your case to trial. This can be
              a lengthy and complex process, but with the right legal
              representation, you can seek the compensation you deserve.
            </Paragraph>
            <Paragraph>
              <strong>Accept the outcome:</strong> Once the legal process is
              complete, you will need to accept the outcome, whether it is a
              settlement or a court decision. Your attorney can help you
              understand your options and make the best decision for your
              situation.
            </Paragraph>
            <Paragraph>
              Losing a loved one is never easy, but with the help of an
              experienced wrongful death attorney, you can seek justice and hold
              those responsible accountable for their actions.
            </Paragraph>

            <Title>
              WHICH PARTIES ARE ALLOWED TO FILE A WRONGFUL DEATH CLAIM?
            </Title>
            <Paragraph>
              In California, certain parties are allowed to file a wrongful
              death claim on behalf of a deceased person. These parties include:
            </Paragraph>
            <Paragraph>
              <strong>Surviving spouse or domestic partner:</strong> If the
              deceased person was married or in a registered domestic
              partnership at the time of their death, their spouse or partner
              has the right to file a wrongful death claim.
            </Paragraph>
            <Paragraph>
              <strong>Children:</strong> If the deceased person had children,
              including biological or adopted children, they may file a wrongful
              death claim.
            </Paragraph>
            <Paragraph>
              <strong>Grandchildren:</strong> If the deceased person's children
              are no longer alive, their grandchildren may file a wrongful death
              claim.
            </Paragraph>
            <Paragraph>
              <strong>Other dependent family members:</strong> If the deceased
              person did not have a surviving spouse, domestic partner, or
              children, other dependent family members, such as parents or
              siblings, may file a wrongful death claim.
            </Paragraph>
            <Paragraph>
              <strong>Personal representative of the estate:</strong> If none of
              the above parties are available to file a wrongful death claim,
              the personal representative of the deceased person's estate may
              file the claim on behalf of the estate and its beneficiaries.
            </Paragraph>
            <Paragraph>
              It is important to note that only one wrongful death claim may be
              filed for each deceased person, and all eligible parties must be
              included in the claim. If there are multiple eligible parties,
              they may need to negotiate and agree on how any damages awarded
              will be divided.
            </Paragraph>
            <Paragraph>
              If you have lost a loved one due to wrongful death, it is
              important to seek the advice of an experienced wrongful death
              attorney who can help you understand your legal rights and guide
              you through the process of filing a claim.
            </Paragraph>

            <Title>RECOVERABLE DAMAGES</Title>
            <Paragraph>
              If you have lost a loved one due to wrongful death, you may be
              eligible to recover a variety of damages under California law.
              These damages may include:
            </Paragraph>
            <Paragraph>
              <strong>Economic damages:</strong> This includes any financial
              losses you have suffered as a result of your loved one's death,
              such as loss of income, medical expenses, funeral and burial
              expenses, and the value of household services that your loved one
              provided.
            </Paragraph>
            <Paragraph>
              <strong>Non-economic damages:</strong> This includes compensation
              for the emotional pain and suffering, loss of companionship, and
              other intangible losses that you have experienced as a result of
              your loved one's death.
            </Paragraph>
            <Paragraph>
              <strong>Punitive damages:</strong> In some cases, the court may
              award punitive damages as a way of punishing the party responsible
              for your loved one's death and deterring similar conduct in the
              future. These damages are awarded in addition to any economic or
              non-economic damages.
            </Paragraph>
            <Paragraph>
              It is important to note that the amount of damages you may be
              eligible to receive will depend on a variety of factors, including
              the circumstances surrounding your loved one's death, the extent
              of your financial losses, and the level of fault of the
              responsible party. An experienced wrongful death attorney can help
              you understand your legal rights and seek the maximum amount of
              damages possible under the law. If you have lost a loved one due
              to wrongful death, it is important to act quickly to protect your
              legal rights. Contact an experienced attorney as soon as possible
              to discuss your options and begin the process of seeking justice
              and compensation for your losses.
            </Paragraph>

            <Title>STATUTE OF LIMITATIONS</Title>
            <Paragraph>
              In California, there is a statute of limitations for filing a
              wrongful death lawsuit. The statute of limitations is the deadline
              by which you must file your lawsuit, or else you may lose your
              right to do so.
            </Paragraph>
            <Paragraph>
              Under California law, a wrongful death lawsuit must generally be
              filed within two years of the date of the deceased person's death.
              However, there are some exceptions that can extend or shorten this
              time period depending on the circumstances of the case. For
              example, if the wrongful death was caused by medical malpractice,
              the statute of limitations may be extended to three years from the
              date of the injury or one year from the date the injury was
              discovered or should have been discovered, whichever comes first.
            </Paragraph>
            <Paragraph>
              It is important to note that the statute of limitations can be a
              complex issue, and there may be other factors that could affect
              your ability to file a lawsuit. For this reason, it is important
              to contact an experienced wrongful death attorney as soon as
              possible if you believe you may have a claim. An attorney can help
              you understand your legal rights and options, and work with you to
              ensure that your lawsuit is filed within the applicable statute of
              limitations.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img src={Image2} alt='Car being evaluated for total loss' />
          </ImageContent>
          <TextContent>
            <Title>
              How can KR Injury Law Firm help you with a WRONGFUL DEATH?
            </Title>
            <Paragraph>
              KR Injury Law Firm can help you with a wrongful death claim by
              providing you with experienced legal representation and support
              throughout the entire process. Here are some of the ways we can
              help:
            </Paragraph>
            <Paragraph>
              <strong>Investigating the case:</strong> We will conduct a
              thorough investigation into the circumstances surrounding your
              loved one's death. This may involve gathering evidence,
              interviewing witnesses, and consulting with experts to build a
              strong case on your behalf.
            </Paragraph>
            <Paragraph>
              <strong>Handling communications:</strong> We will handle all
              communications with insurance companies, other attorneys, and any
              other parties involved in the case so that you can focus on
              healing and moving forward.
            </Paragraph>
            <Paragraph>
              <strong>Calculating damages:</strong> We will work with financial
              experts to accurately calculate the damages you are entitled to
              under California law, including both economic and non-economic
              damages.
            </Paragraph>
            <Paragraph>
              <strong>Negotiating a settlement:</strong> We will work to
              negotiate a fair settlement with the responsible party or their
              insurance company so that you can avoid the stress and uncertainty
              of a trial.
            </Paragraph>
            <Paragraph>
              <strong>Litigating the case:</strong> If necessary, we will
              represent you in court and fight for your rights and interests at
              trial.
            </Paragraph>
            <Paragraph>
              At KR Injury Law Firm, we understand that losing a loved one is
              one of the most difficult experiences you can go through, and we
              are committed to providing compassionate and personalized legal
              representation to help you through this challenging time. Contact
              us today to schedule a free consultation and learn more about how
              we can help with your wrongful death claim.
            </Paragraph>
          </TextContent>
        </SectionRight>
      </Container>
    </>
  );
};

export default WrongfulPage;
