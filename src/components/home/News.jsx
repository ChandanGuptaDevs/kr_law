import React, { useState } from "react";
import styled from "styled-components";
import lawyerDeskImage from "../../assets/home_imgs/mistake_img_hiring_lawyer.jpg";
import moneyHandsImage from "../../assets/home_imgs/medical_bills_personal_injury_img.jpg";
import courtroomImage from "../../assets/home_imgs/personal_injury_go_to_trial.jpg";

const NewsContainer = styled.section`
  width: 100%;
  padding: 70px 20px;
  background-color: #fff;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 25px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ba0a02;
  margin: 0 5px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #333;
`;

const ArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Article = styled.div`
  flex: 1;
  max-width: 370px;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 230px;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${Article}:hover & {
    transform: scale(1.05);
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 60px;
`;

const Month = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Day = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  line-height: 1;
`;

const Year = styled.div`
  font-size: 14px;
  color: #555;
`;

const ContentContainer = styled.div`
  padding: 25px;
`;

const Category = styled.div`
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;

const ArticleTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMore = styled.a`
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 18px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Comments = styled.div`
  color: #999;
  font-size: 14px;
  float: right;
  padding-top: 8px;

  &::before {
    content: "💬";
    margin-right: 5px;
  }
`;

const SliderControls = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  margin: 0 -25px;
  font-size: 24px;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
  }

  &:focus {
    outline: none;
  }
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const PaginationDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#BA0A02" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const News = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const newsArticles = [
    {
      id: 1,
      image: lawyerDeskImage,
      date: { month: "Jan", day: "09", year: "2023" },
      category: "Personal Injury Lawsuits",
      title: "TOP 5 MISTAKES WHEN HIRING A PERSONAL INJURY LAWYER",
      excerpt:
        "Finding the right legal help or personal injury lawyer can be a daunting prospect. You often have to find a lawyer for your injuries at a time when...",
      comments: 0,
    },
    {
      id: 2,
      image: moneyHandsImage,
      date: { month: "Jan", day: "09", year: "2023" },
      category: "Personal Injury Lawsuits",
      title: "WHO PAYS YOUR MEDICAL BILLS IN A PERSONAL INJURY LAWSUIT?",
      excerpt:
        "When you're involved in an accident resulting in personal injury, the confusion of the situation can make it difficult to think through a personal...",
      comments: 0,
    },
    {
      id: 3,
      image: courtroomImage,
      date: { month: "Jan", day: "09", year: "2023" },
      category: "Personal Injury Lawsuits",
      title:
        "WHAT MAKES A PERSONAL INJURY CASE (OR PERSONAL INJURY LAWSUIT) GO TO TRIAL?",
      excerpt:
        "Personal injury cases can be complicated, but the law doesn't have to be. A personal injury lawsuit is a civil lawsuit that centers on one person...",
      comments: 0,
    },
  ];

  return (
    <NewsContainer>
      <InnerContainer>
        <Title>NEWS, NOTABLE & TRENDING</Title>

        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>

        <Subtitle>
          Keep up to date with KR Law and understand the{" "}
          <Highlight>latest trends</Highlight> in today's world.
        </Subtitle>

        <ArticlesContainer>
          <SliderControls>
            <NavButton aria-label="Previous articles">❮</NavButton>
            <NavButton aria-label="Next articles">❯</NavButton>
          </SliderControls>

          {newsArticles.map((article) => (
            <Article key={article.id}>
              <ImageContainer>
                <ArticleImage src={article.image} alt={article.title} />
                <DateBadge>
                  <Month>{article.date.month}</Month>
                  <Day>{article.date.day}</Day>
                  <Year>{article.date.year}</Year>
                </DateBadge>
              </ImageContainer>

              <ContentContainer>
                <Category>{article.category}</Category>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ReadMore href="#">Read More</ReadMore>
                  <Comments>{article.comments}</Comments>
                </div>
              </ContentContainer>
            </Article>
          ))}
        </ArticlesContainer>

        <PaginationDots>
          <PaginationDot
            active={currentPage === 0}
            onClick={() => setCurrentPage(0)}
          />
          <PaginationDot
            active={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          />
          <PaginationDot
            active={currentPage === 2}
            onClick={() => setCurrentPage(2)}
          />
        </PaginationDots>
      </InnerContainer>
    </NewsContainer>
  );
};

export default News;
