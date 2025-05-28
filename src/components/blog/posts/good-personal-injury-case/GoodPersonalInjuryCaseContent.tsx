"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Question = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 30px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 25px;
    max-width: 360px;
  }
`;

const TextContent = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export default function GoodPersonalInjuryCaseContent() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Paragraph>
            Personal injury law is a highly specialized field, and personal
            injury cases can vary depending on the circumstances, plaintiff/
            defendant cooperation, and whether skilled legal representation is
            present. The rules governing each lawsuit can be very complex and
            the financial compensation they provide to those who have been
            injured is substantial. Given that, it's important to know what
            makes a good personal injury lawsuit and how that can impact your
            compensation if you've been seriously injured in any type of
            accident, regardless of the case reaching trial and regardless of
            having a personal injury lawyer.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Is the negligence of another party easy to prove in your personal
            injury lawsuit?
          </Question>
          <Paragraph>
            To be awarded personal injury damages, you must show that the other
            party was liable for your accident. It is not enough for you to
            simply show that the defendant was negligent or that their actions
            directly caused your injuries. Instead, you must prove that their
            negligence was a direct cause of your accident.
          </Paragraph>
          <Paragraph>
            In addition to proving negligence, it may also be necessary to prove
            causation—that is, that there is no other reasonable explanation for
            why an injury occurred. For example: if two drivers both swerve to
            avoid a deer, and one person swerves to the other side of the road
            and hits another car head-on, you would likely need to provide more
            evidence than just one driver's testimony before finding them
            responsible for any resulting injuries incurred by passengers in
            either car.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Damages don't need to be serious to file personal injury claims.
            However, does your case center around the seriousness of your
            injuries?
          </Question>
          <Paragraph>
            When you file personal injury claims, it is important to know what
            constitutes a serious injury that would warrant compensation. The
            law in most states does not specifically define what makes an injury
            serious or minor. Instead, the legal arguments are left to the
            influence of personal injury lawyers, and the discretion of judges
            and juries who must consider all of the facts surrounding the case
            of the victim before determining whether or not it qualifies for
            compensation from the defendant.
          </Paragraph>
          <Paragraph>
            In most personal injury cases, courts have ruled that damage caused
            by someone else's negligence which resulted in physical pain and
            suffering or mental anguish was considered serious enough to be
            compensated by damages. The following are types of damages that
            should be included when determining whether or not your injuries
            qualify:
          </Paragraph>
          <Paragraph>
            <strong>Physical pain and suffering:</strong> this is immediate
            grounds to pursue compensation in the form of a personal injury
            lawsuit. The defendant may be liable to pay for medical care in the
            form of medical bills and more. Your personal injury lawyer will
            consult with medical professionals involved in your recovery to
            collect evidence of your injuries and medical care. In cases of
            serious injury such as brain or spinal cord injuries, you may seek
            to recover compensation in the form of punitive damages against the
            defendant. These actions either show victims were intentionally hurt
            in accidents and need of more compensation, or that the guilty party
            needs a more severe punishment for their negligence.
          </Paragraph>
          <Paragraph>
            <strong>Property damage:</strong> in many personal injury cases,
            there are not only medical bills but also property damage to each of
            the accident victims' vehicles. In this instance, the liable party
            (and their insurance company) will be required to compensate the
            injury victims for their vehicle damage along with all other
            compensation in the form of a personal injury settlement. Lawyers
            may present resources like accident scene evidence highlighting your
            personal damages, and how the defendant was liable.
          </Paragraph>
          <Paragraph>
            <strong>Mental anguish (emotional distress):</strong> your mental
            state is nothing to overlook, and while it is often difficult to
            pinpoint a fair settlement for mental anguish, in claims like these,
            a dollar value can be attached to your mental suffering. Legal
            professionals might intentionally withhold information and lead
            their claims to trial in cases of severe mental anguish. Showcasing
            mental and emotional distress is often worth the hassle of
            testifying, as a jury can see the victim and become emotionally
            attached to their story. Rather than hearing a secondhand account,
            the jury can have the best possible chance to hear and feel the
            depth of the victim's pain and suffering.
          </Paragraph>
          <Paragraph>
            <strong>Loss of enjoyment of life:</strong> as in cases of personal
            injury lawsuits, victims can have difficulty resuming their regular
            lives following traumatic accidents. Further, this loss of enjoyment
            will also be presented during settlement negotiations to better
            negotiate a fair settlement. The sooner the victim can receive a
            fair settlement to their claim, the sooner they can move on and
            resume the healing process.
          </Paragraph>
          <Paragraph>
            <strong>Loss of earning capacity or loss of income:</strong> in many
            personal injury claims, loss of earning capacity and medical
            expenses are costlier than their initial personal injuries. A person
            may be short on money following an accident, unable to support
            themselves and their families moving forward. You must factor this
            into the settlement itself, especially since claims like these can
            drag on for months or even years.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Can your lawyer easily prove liability in your claim?
          </Question>
          <Paragraph>
            To succeed in your injury case, your claim must center around
            proving the other party was negligent in the accident. This is
            typically accomplished by proving that they did not take reasonable
            care when they were engaging in an activity and their negligence
            resulted in your injury.
          </Paragraph>
          <Paragraph>
            A good example of this would be a vehicle collision where one driver
            ran a red light and hit another vehicle. If you were driving behind
            this driver and suffered injuries as a result of the crash, then it
            would be your burden to show that he or she was negligent or
            intentional by running the red light. Once your claim has proven
            this element of liability, then it is up to them (the person who has
            been found at fault) to prove that their actions were reasonable
            under the circumstances or otherwise known as "acts of god."
          </Paragraph>
          <Paragraph>
            Regardless, a good legal professional needs to have a plethora of
            information and resources to understands the rules that govern these
            accidents, and how to collect proper compensation for their clients.
            These resources aren't limited to simply proven liability with
            evidence, your legal representative must file many documents on your
            behalf in a timely manner. There are many benefits to staying ahead
            of these deadlines, such as being able to prove your due diligence.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Do you have strong evidence to prove your claim?</Question>
          <Paragraph>
            As legal professionals, it's not enough to just have a client who
            says they were injured in an accident. You need information or proof
            that supports their story, and can stand strong against various
            legal arguments. A good personal injury lawsuit has strong evidence:
          </Paragraph>
          <Paragraph>
            Photos of the scene of the accident. These can be useful for showing
            how fast your client was going when he or she hit another car and
            how much damage was done by the impact and its aftermath.
          </Paragraph>
          <Paragraph>
            Witness testimony from people who saw what happened before or after
            your client got into his or her vehicle (for example, a witness who
            saw someone else run out between cars at an intersection). Expert
            witnesses can rank among the most valuable forms of information in a
            personal injury lawsuit.
          </Paragraph>
          <Paragraph>
            Medical records documenting injuries sustained in the accident and
            any treatments that followed. Any other relevant documentation
            related to this—such as police reports detailing any criminal
            activity involved with the incident—should be presented by your
            lawyer.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Do you have an experienced personal injury lawyer representing your
            case? Has your lawyer brought you up to speed on your claim and
            personal injury law?
          </Question>
          <Paragraph>
            A lawyer who has been practicing for years will know the ins and
            outs of California law, as well as how best to present your case in
            court. An experienced legal representative will also give you
            personalized attention and make sure that you have all the
            information you need to make an informed decision about what happens
            next.
          </Paragraph>
          <Paragraph>
            An experienced attorney can help negotiate with insurance companies,
            which is especially important if they offer a settlement outside of
            court because it means less time and money spent on legal fees and
            court appearances.
          </Paragraph>
          <Paragraph>
            They may also come with entire legal team, the connections to
            collect other information (such as medical bills and police reports)
            should the case head to trial. Your legal representative can act as
            a liaison for each person or party involved in the lawsuit, or even
            act as a mediator working to prevent the lawsuit from reaching
            trial. In the instance your case goes to trial, personal injury
            lawyers have experience proving liability in court, and can often
            influence the final jury verdict. Regardless, personal injury
            attorneys can fight on your behalf and ensure the law is on your
            side. They simply have the right experience handling accidents such
            as these, and allowing their client to resume their regular business
            following these accidents. If you're scoping out a good law firm, we
            recommend reviewing their potential clients, testimonials, other
            cases they have covered, whether they have hourly rates or operate
            on a contingency fee basis/ retainer agreement.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>What defines good personal injury cases?</Question>
          <Paragraph>
            The best personal injury cases are those that are the most
            straightforward. The more complicated a lawsuit gets, the less
            likely it is to succeed. Most people will want to pursue damages
            from an insurance company or another party who has injured them in
            some way. However, there are some things you need to keep in mind
            when filing a claim for your injuries, whether or not your lawsuit
            hits trial.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            If you've been injured in an accident that wasn't your fault, our
            team of lawyers can help you take legal action
          </Question>
          <Paragraph>
            If you have been injured in an accident, it's important to take
            legal action as soon as possible. You need experienced legal
            professionals who can help you get the compensation you deserve. Our
            personal injury law firm is dedicated to our clients during every
            step of the process. Not only will you work one-on-one with a
            dedicated team member, you don't have to pay until we win!
          </Paragraph>
          <Paragraph>
            If your injuries were caused by someone else's negligence or
            recklessness, we can help you pursue a claim for compensation for
            your pain and suffering, medical expenses and loss of earnings.
          </Paragraph>
          <Paragraph>
            We know how stressful a personal injury is for our clients so we
            always do our best to make sure that their case progresses quickly
            with minimal disruption to their lives. You won't be left waiting
            around for months while we deal with paperwork or other tedious
            tasks – we will handle everything from start to finish so that all
            you have to do is concentrate on recovering from your accident
            without worrying about anything else!
          </Paragraph>
          <Paragraph>
            We have the resources and dedication to get you the proper
            compensation for your claim. We've handled accidents in every field,
            and have the knowledge to help you too. You can either request
            information directly, or contact our team of personal injury lawyers
            here to get the money you deserve and take back your life!
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
