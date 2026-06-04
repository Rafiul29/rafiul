# Dynamic Developer Portfolio Database Design

## 1. Identity & Auth (Better-Auth)
- **User**: Core admin user.
- **Account**: Social login accounts (Google, GitHub, etc.).
- **Session**: Auth sessions.
- **Verification**: Email/Token verification.

## 2. Professional Profile (The "Dynamic" Core)
- **Profile**: 
  - One-to-One with **User**.
  - Fields: `fullName`, `tagline`, `bio`, `avatarUrl`, `resumeUrl`, `cvUrl`, `location`, `phoneNumber`, `availableForWork`.
- **SocialLink**:
  - One-to-Many with **Profile**.
  - Fields: `platform`, `url`, `icon`.

## 3. Experience & Education
- **Experience**:
  - One-to-Many with **User**.
  - Fields: `company`, `position`, `location`, `startDate`, `endDate`, `description`, `isCurrent`.
- **Education**:
  - One-to-Many with **User**.
  - Fields: `institution`, `degree`, `field`, `startDate`, `endDate`, `gpa`, `isCurrent`.

## 4. Portfolio Content
- **Project**:
  - One-to-Many with **User**.
  - Fields: `title`, `slug`, `description`, `content`, `demoUrl`, `repoUrl`, `videoUrl`, `thumbnail`, `isFeatured`, `type` (Enum).
- **ProjectContributor**:
  - One-to-Many with **Project**.
  - Fields: `name`, `role`, `avatar`, `socials`.
- **Skill**:
  - One-to-Many with **User**.
  - Fields: `name`, `category` (Enum), `level` (Enum), `icon`, `order`.

## 5. Blog & Engagement
- **Blog**:
  - One-to-Many with **User**.
  - Fields: `title`, `slug`, `content`, `excerpt`, `coverImage`, `published`, `viewCount`, `status` (Enum).
- **Contact**:
  - Store incoming messages from the portfolio.
  - Fields: `name`, `email`, `subject`, `message`, `isRead`.

## 6. Recognition
- **Achievement**: Awards, Hackathons.
- **Certification**: Official certs with URLs.