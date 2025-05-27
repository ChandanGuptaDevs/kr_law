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

export default function MedicalBillsContent() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Paragraph>
            When you're involved in an accident resulting in personal injury,
            the confusion of the situation can make it difficult to think
            through a personal injury lawsuit. What are your rights? Who is
            liable for what? What does my case look like? What do you do next?
            Do I need legal help? Like an attorney? In each case, the list of
            questions and concerns following accidents goes on. To help you
            clear up the confusion, here's an overview of what you need to know
            about who is responsible for paying for your injuries following
            accidents (as well as a personal injury lawsuit) in California.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            When you're involved in an accident, the confusion of the situation
            can make it difficult to think clearly. A personal injury lawyer can
            help.
          </Question>
          <Paragraph>
            If you were involved in a personal injury caused by someone else,
            you may be wondering who will cover your case and pay for your
            injuries. The confusion of each case can make it difficult to think
            clearly. You need to understand your rights and know how personal
            injury law applies to your case. You might also need an experienced
            lawyer for proving liability in various accidents.
          </Paragraph>
          <Paragraph>
            In California accidents, when another person's negligence hurts you,
            they are responsible for paying your medical expenses related to
            that personal injury in the form of a personal injury settlement. If
            they do not have enough insurance coverage or money to pay all of
            these personal injuries costs themselves, their insurer may step in
            and help with some or all of them instead.
          </Paragraph>
          <Paragraph>
            A personal injury lawyer may be necessary to search for and collect
            necessary information related to the accident and your personal
            injury and will use this collected information to build a compelling
            personal injury case. A lawyer will not only help you file personal
            injury claims, but an attorney and injury law firm will be an
            ongoing source of personal injury resources following accidents.
            They are responsible for making your case make sense and proving the
            liable party responsible whether or not the case hits a court of
            law.
          </Paragraph>
          <Paragraph>
            If prospective lawyers have had experience with personal injury
            lawsuits, they should be able to lay out a timeline of your personal
            injury claim in a way you understand. A lawyer should provide
            consistent legal counsel for your case, and provide you with all
            necessary information related to your claim. An experienced attorney
            might be able to summarize a typical personal injury, or even what a
            personal injury might be worth in your case.
          </Paragraph>
          <Paragraph>
            Lawyers will review the site of the accident, observe the defendant
            over time, find and collect various information and documents
            necessary to prove liability, review similar accidents, and
            potentially prove liability in court. An attorney will also ensure
            you don't miss any deadlines to file important documents related to
            your accident. Some specific days and deadlines can't be missed, so
            an experienced lawyer is necessary.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Who pays my medical bills for my personal injury case?
          </Question>
          <Paragraph>
            If you have health insurance, then it's simple who pays for your
            injury. Your health insurance will pay for your personal injury and
            lost wages up to the policy limits. If you don't have health
            insurance or have a very low limit on your policy (less than $10k),
            then it may be necessary for you to file a lawsuit against the other
            driver to recover compensation for your injuries and losses in the
            form of a settlement. Following accidents like these, it is up to
            lawyers to ensure the plaintiff receives appropriate compensation.
          </Paragraph>
          <Paragraph>
            In a personal injury case, the fault is assessed based on who was
            negligent in causing the accident. Negligence means failure to use
            reasonable care under circumstances that show a disregard for others
            who might be injured as a result of this conduct. They can in turn
            hurt others in accidents such as these. This is why a settlement is
            necessary. A settlement holds these parties responsible for the
            damage they inflict, and a lawyer can help prove liability.
          </Paragraph>
          <Paragraph>
            California is a comparative negligence state, which means that even
            if you were partially at fault, it is still possible that another
            driver could be held financially liable for paying your medical
            bills.
          </Paragraph>
          <Paragraph>
            In states that adhere to the "comparative negligence" standard for
            assigning liability, if you were partially at fault for your
            accident, you may still be able to recover damages from another
            driver. If you can prove that their actions caused or exacerbated an
            accident, a court may rule them solely responsible for paying your
            medical bills and other expenses related to the accident. This is
            true even if they were only partially at fault while you bear some
            responsibility as well.
          </Paragraph>
          <Paragraph>
            For all manner of accidents, California is a comparative negligence
            state. The legal doctrine of comparative negligence allows a person
            to recover compensation from another party even though he or she was
            partially at fault for causing an injury. In each case under this
            legal doctrine, if you are found to be 20% at fault for causing your
            injuries (and 80% not at fault), then the injured party can recover
            80% of his or her damages from you, and only 20% from the other
            driver.
          </Paragraph>
          <Paragraph>
            In legal terms of tort law in general, there are three main types:
            negligence; strict liability; and intentional conduct (also known as
            "intentional torts"). Negligence occurs when someone fails to act by
            ordinary standards of care—in other words, they acted unreasonably
            compared with how most people would behave under similar
            circumstances. Strict liability means that someone can be held
            liable even if they didn't intend any harm or were negligent
            themselves. These two types tend to overlap quite often because
            there's generally no consideration given about whether or not
            someone intended their actions (negligence). Consult a lawyer if you
            have injuries and need further legal guidance, as they will have
            much more experience regarding personal injury cases such as yours.
            An attorney will lay the process out for you, even if your case
            never reaches a court of law.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            What happens if I don't have health insurance or car insurance?
          </Question>
          <Paragraph>
            Following personal injury accidents, if you don't have health
            insurance or car insurance, your injuries may not be covered. You
            may have to pay for your personal injury and legal case expenses out
            of pocket. You can apply for Medicaid and other government programs
            that help cover medical costs if you don't have private insurance.
            Contacting your local Department of Health Care Services (DHCS)
            office may help find out if there are any programs available where
            you live.
          </Paragraph>
          <Paragraph>
            If you don't qualify for Medicaid or other public assistance,
            consider applying for a credit card with low-interest rates and no
            annual fees so that you can pay off your hospital bills over time
            without incurring extra costs. You could also use the services of an
            online fundraising website like GoFundMe or YouCaring to solicit
            donations from friends and family members who want to help offset
            some of the expenses associated with recovering from an accident.
            You can also choose to attempt to recoup everything with the right
            lawyer or attorney, as legal representation may be the only
            solution, as their resources can help you reach mediation with the
            other party, or completely recover your losses in a settlement.
            Lawyers work hard to ensure you don't have to be held responsible
            for all your legal and medical expenses.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            How is fault assessed for a typical personal injury?
          </Question>
          <Paragraph>
            In any personal injury case, the first legal step in each claim is
            to determine which party was liable. The driver or pedestrian who
            caused an accident is 100% liable for any damages resulting from
            that accident. The driver or pedestrian who caused an accident may
            be partially liable if they were also partially at fault for causing
            such damages—in other words, if they weren't completely responsible
            for them all (but still more responsible than any other person
            involved in the collision).
          </Paragraph>
          <Paragraph>
            If two vehicles collide and both drivers are equally negligent (each
            contributed 50% of their share of failure), then each driver must
            pay half of any property damage costs stemming from their collision
            with one another. However, these figures are only meant as
            guidelines; it's possible that one party could be held responsible
            for paying more than 25% or less than 75%, depending on factors like
            previous record citations/accidents and severity/impact level of
            injuries sustained by victims during collisions with other
            drivers/pedestrians near San Diego County.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Who pays my medical bills in a personal injury case?
          </Question>
          <Paragraph>
            If you are injured in an accident and seek medical treatment, the
            liable driver's auto insurance company is required to pay for all of
            your damages. If you have uninsured/underinsured motorist coverage
            through your policy, that coverage can be used to cover some or all
            of your medical costs too. In case the at-fault driver's policy
            doesn't provide enough money to cover all of your losses, you may be
            able to file a personal injury lawsuit against him or her to recover
            further compensation for these extra expenses in the form of a
            settlement. Your attorney will be able to prove the liable party
            responsible whether or not the case hits trial, and you will receive
            a fair settlement for your accident complaint.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            How are medical costs covered if I was partially at fault in the
            personal injury lawsuit?
          </Question>
          <Paragraph>
            In your case, if you were partially at fault for the accident and if
            your insurance company pays for your personal injury, it will reduce
            them based on how much fault was assigned to you. In other words, if
            the amount that your healthcare provider charged you was $3,000 and
            30% of the blame was assigned to you, then your carrier would pay
            only $2,100 for your personal injury (70% of $3,000). If you were
            fully at fault in an accident that resulted in injuries being
            incurred by others involved in the accident (e.g., passengers), then
            there is no question about whether or not those individuals can sue
            their auto insurers; they cannot.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Will my settlement cover all of the expenses in my personal injury
            claim?
          </Question>
          <Paragraph>
            In California, it's important to understand that a settlement is not
            a guarantee. A settlement can be used to pay for injuries and lost
            wages following an accident, but it cannot be used to pay for pain
            and suffering. The amount of your settlement will vary based on the
            severity of your personal injury and other factors like how much
            time you spent in the hospital or were unable to work because of
            your injuries.
          </Paragraph>
          <Paragraph>
            The most common way people earn a living after an accident is by
            receiving workers' compensation benefits from their employer.
            Workers' comp provides wage replacement if you were injured at work
            and qualify for benefits under California law (more on this below).
            In addition to wage replacement benefits, workers' comp also helps
            cover medical expenses related to workplace injuries up until you
            reach maximum medical improvement—the point at which your doctor
            determines that there has been no further improvement since the date
            of injury—and sometimes beyond this point as long as certain
            circumstances apply. If you have further pain and suffering, a
            lawyer may have to prove the extent of said suffering in court. It
            would be the responsibility of your attorney to prove that you are
            consistently suffering due to the negligence of the defendant.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Consider a personal injury attorney.</Question>
          <Paragraph>
            Personal injury lawyers can help you file personal injury claims or
            better understand your lawsuit/ personal injury law. If you are
            injured in an accident, your priority should be to get the care you
            need. After that, it's important to follow up against the liable
            party to receive the necessary settlement. However, at this
            juncture, one must have some understanding related to personal
            injury law. These are accidents personal injury lawyers understand,
            and can help earn you a proper settlement.
          </Paragraph>
          <Paragraph>
            A personal injury attorney will take your case and ensure that you
            receive a fair settlement for your accident and resulting injury.
            Your lawsuit will be taken seriously, as your livelihood itself is
            on the line.
          </Paragraph>
          <Paragraph>
            Contact us here or via email to find the best personal injury lawyer
            to handle your case and injury. We understand that your accident has
            left you with expenses you shouldn't have to pay. We will treat your
            lawsuit with care and will use our resources related to personal
            injury law to earn you a proper settlement for your injuries.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
