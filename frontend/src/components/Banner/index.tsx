import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%);
  background-size: 300% 300%;
  animation: ${gradientShift} 8s ease infinite;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(83, 52, 131, 0.4) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(15, 52, 96, 0.5) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 48px 24px;
  max-width: 720px;
`;

const BannerTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

const BannerSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 32px;
  line-height: 1.6;
`;

const BannerBadge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 20px;
  backdrop-filter: blur(8px);
`;

interface BannerProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const Banner = ({
  title = "Cursor Workshop",
  subtitle = "Utforsk AI-assistert utvikling og bygg fremtiden raskere enn noensinne.",
  badge = "Workshop",
}: BannerProps) => (
  <BannerWrapper>
    <BannerContent>
      <BannerBadge>{badge}</BannerBadge>
      <BannerTitle>{title}</BannerTitle>
      <BannerSubtitle>{subtitle}</BannerSubtitle>
    </BannerContent>
  </BannerWrapper>
);
