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

export default function PersonalInjuryTrialContent() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Paragraph>
            Personal injury cases can be complicated, but the law doesn't have
            to be. A personal injury lawsuit is a civil lawsuit that centers on
            one person suing another because of an accident or injury. The most
            common type of personal injury cases are car accidents, but there
            are also many other types, including slip-and-fall injuries and
            medical malpractice lawsuits. Personal injury cases usually involve
            two parties: the plaintiff (the injured person) and the defendant
            (the person who caused the injury and related medical expenses).
            These two people may negotiate with each other to come up with an
            agreement outside of court, or they may decide to go through trial
            instead. In each instance, both parties are likely to have legal
            representation in the form of a personal injury lawyer. Below, we've
            outlined some reasons why your attorney might want to take your case
            to trial instead of settling out of court for your accident and
            personal injury:
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Obvious plug: do you have a quality lawyer?</Question>
          <Paragraph>
            If you're injured in a car accident or a work accident, the facts
            surrounding your accident may be complicated by the injuries and
            losses sustained, including but not limited to medical bills, loss
            of income, loss of self-care, mental anguish and/or PTSD that
            follows accidents, and a lack of overall information needed to move
            forward. Situations such as these place added pressure on victims of
            personal injury or damage to either settle or fight to the end.
            These sustained injuries or overarching inability to work may make
            it difficult to pursue financial compensation from the negligent
            party. However, fighting back is recommended, as the law will ensure
            that the responsible party will pay for your injuries, personal
            injury car repair costs, increased auto insurance rates (if this is
            a DUI personal injury offense for the defendant or other various
            crimes), medical bills, and other damages. The duty of your lawyer
            will ensure you receive proper care and allow you to simply focus on
            your health while they find evidence to prove the other party made
            negligent decisions that caused your injuries.
          </Paragraph>
          <Paragraph>
            A lawyer can help victims of accidents and other malpractice receive
            not only the legal help that they need but also the care necessary
            to make the right decisions down the line. An experienced lawyer
            ensures you can continue to make good decisions throughout the
            entirety of your personal injury claim and helps ensure the law is
            on your side. Further, they ensure that you have the best quality of
            life possible during a time when you just want to move on with your
            life. A lawyer ensures you can do exactly that, as quickly as
            possible.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Following an accident, the defendant and the plaintiff can't agree
            on a settlement or the injuries sustained.
          </Question>
          <Paragraph>
            Following accidents, for reasons such as these and many more (such
            as not agreeing to who caused the accident), the legal process for a
            personal injury settlement can be held up. Perhaps the defendant
            doesn't believe they caused your injury. Sometimes the defendant
            will go even further and suggest the plaintiff's injuries are false
            information and that the plaintiff's entire personal injury claim is
            a personal attack. Of course, the settlement may play out much
            easier, and there may be peaceful negotiations between both parties.
            However, following accidents where such a breakdown occurs, an
            experienced personal injury attorney is recommended to ensure your
            personal injury is compensated fairly. They will bring you up to
            speed on your accident and how it's covered under personal injury
            law. They'll also ensure you're organized through each step. There
            are deadlines that, if missed, will bar a victim from collecting on
            their personal injury. Therefore, there are forms of personal injury
            that professionals are aware of. They will not only show you how to
            fill out these personal injury forms but also understand the legal
            process on a deeper level.
          </Paragraph>
          <Paragraph>
            When two parties cannot agree on the terms of a settlement following
            an accident, the injury case goes to trial. Trials are often held in
            front of a jury of 12 people selected from a pool that includes
            everyone eligible to serve on juries in your state or county. Before
            you can start the trial process, however, you or your attorney must
            file what's called an "offer of proof," which is essentially a list
            of all the evidence you wish to present at trial and how it relates
            to your case of personal injury. The defense will then do the same
            thing: they'll submit an offer of proof showing which pieces of
            evidence they believe would support their side of the accident.
          </Paragraph>
          <Paragraph>
            Once both parties have submitted their offers of proof, the judge
            will decide which pieces of evidence can be admitted. If a piece of
            evidence is deemed inadmissible by the court, it cannot be used at
            trial; if it's admitted, then both sides can use it to make their
            case. Following accidents, the judge will also decide which
            witnesses can be called to testify. If the judge decides that
            certain evidence (such as personal injuries) or witnesses are
            inadmissible, then he'll tell both parties so, and they can decide
            whether or not they want to appeal that decision.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Does the trial site favor plaintiffs?</Question>
          <Paragraph>
            Location is a factor in selecting a trial venue for a personal
            injury claim. Some jurisdictions have a reputation for favoring
            plaintiffs, while others are more pro-defendant following an
            accident.
          </Paragraph>
          <Paragraph>
            If you are the plaintiff in a personal injury case, you may want to
            avoid a location that is known to favor defendants because this
            could make it harder for your claim to be heard by an impartial jury
            that believes you deserve compensation for your personal injury
            damages. On the other hand, if you're representing yourself as a
            defendant (and therefore not eligible for legal aid), being tried in
            such a venue may mean higher odds of getting an acquittal or
            reduction in damages awarded against you.
          </Paragraph>
          <Paragraph>
            If you're a juror or witness for such accidents, the reputation of
            the court where your case is being heard could influence how you
            view it. Jurors may be more likely to convict if they believe that
            the judge and jury in similar accidents were biased against the
            defendant. Witnesses who testify against someone they know will also
            be more likely to lie if they know that person was acquitted in a
            similar accident.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Your attorney wants to get publicity for your personal injury case,
            or they want to center your case around a serious accident injury.
          </Question>
          <Paragraph>
            One thing you should know about personal injury attorneys is that
            they understand the value of publicity and attention. They might not
            admit it, but if you've ever watched TV and seen ads for lawyers and
            law firms, you know what I mean. The more publicity personal injury
            claims get following accidents, the more likely it is that people
            will hear about them—and that more people will be interested in
            helping with such personal injury claims. There are all kinds of
            reasons why this could happen: maybe there are other victims with
            similar accident injuries who need legal representation; maybe the
            media will help spread awareness about how dangerous a certain type
            of product can be (like cell phones or car seats); maybe someone
            else has been injured by the same person or business before and
            would want to help out; maybe people will want to donate money when
            they hear what happened to someone like them!
          </Paragraph>
          <Paragraph>
            A related benefit is that once an attorney starts getting some good
            press, he or she may become better known among other attorneys, who
            might recommend him or her for other cases in the future. Finally,
            personal injury lawyers need to be able to work with the media.
            They're going to have to talk about your case in public, and if they
            aren't good speakers or don't know how to give interviews, then it
            could hurt your chances of winning. Certain accidents and situations
            are delicate and need someone charismatic to earn empathy and
            awareness. The combination of legal insight and the ability to
            relate to others can nearly guarantee victory.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Is there a lot of money at stake with your personal injury lawsuit?
          </Question>
          <Paragraph>
            In a personal injury case, there may be a lot of money at stake.
            Money is a big motivator for people, and if you want to get
            compensation for your injuries, you need to be able to prove that
            you are entitled to it. The amount of money at stake will depend on
            the nature of your case—for example, whether you have suffered any
            permanent damage as well as how much medical treatment has been
            necessary so far. Sometimes, when so much is at stake, hitting a
            courtroom is an inevitability.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Some personal injury claims are held up when the defendant refuses
            to pay or when they seek punitive damages.
          </Question>
          <Paragraph>
            In some cases, a plaintiff will request that punitive damages be
            awarded to the defendant. This is known as a "punitive damage
            claim." Punitive damages are not usually awarded in all cases, no
            matter what type of case it is. In most states, punitive damage
            claims are not allowed in personal injury cases involving accidental
            injuries or wrongful death.
          </Paragraph>
          <Paragraph>
            However, in some states, punitive damage claims are allowed in
            personal injury cases. In these states, punitive damages are awarded
            to punish the defendant for their wrongful conduct and to deter
            others from engaging in similar conduct. The purpose of punitive
            damages is not to compensate the plaintiff for their injuries, but
            rather to punish the defendant and deter others from engaging in
            similar conduct. As such, a jury may award punitive damages only if
            they find that the defendant acted with malice, fraud, or
            oppression. Punitive damages are generally awarded in addition to
            actual damages (such as medical expenses).
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Your personal injury attorney will go over all your options with you
            and make sure you are informed before making a decision.
          </Question>
          <Paragraph>
            Before deciding whether to go to trial, you must have an attorney
            who can explain all your options to you. They'll answer any
            questions you have about the case and help ensure that you
            understand what's involved in each option. If it comes down to a
            choice between going to trial or settling out of court, your
            attorney will explain the pros and cons of each choice so that you
            come away from the conversation feeling confident about your
            decision.
          </Paragraph>
          <Paragraph>
            In some cases, settling may make more sense than going through a
            long process of preparing for trial, but in others, going to trial
            may be worth it because of how high the stakes are. No one other
            than your attorney (and perhaps their paralegal) can know exactly
            how much time they'll need to spend preparing for a case like yours,
            so only they can make this call based on their knowledge of similar
            cases they've worked on before. In general, though,
          </Paragraph>
          <Paragraph>
            Settling means giving up some money right now; going forward means
            risking losing even more money if things don't go well at trial (if
            either side wins).
          </Paragraph>
          <Paragraph>
            Settling means accepting whatever offer is on the table now; going
            forward means having leverage over whoever else might want something
            from later down the line.
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            A personal injury lawyer is recommended for personal injury cases to
            ensure you understand personal injury law and receive maximum
            compensation.
          </Question>
          <Paragraph>
            Remember, your attorney is there to help you make decisions about
            your case and the best way to proceed. They will guide you through
            this process and give their opinion on what they think would be most
            effective for getting compensation for your injuries. You can trust
            them with all the details of your situation since they're highly
            knowledgeable about personal injury law and have years of experience
            handling cases just like yours.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
