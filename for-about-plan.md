# Plan for UI Revision: For About Page

This document outlines the plan to revise the UI for the `src/app/[locale]/(marketing)/about/page.tsx` page.

## General Styling

-   **Max Width:** All sections will have a `max-width` of `2018px` for desktop views.
-   **Full Width:** Each section will be full width, spanning the entire viewport horizontally.

## Section Breakdown

### Section 1: Journey
-   **Component:** `src/components/about/Journey.tsx` (New)
-   **Content:** "On a journey to bring delight and liberation to learning since 2021"
-   **Description:** This section will serve as the introduction, setting the stage for the company's history and purpose.
-   **Image:** Full width, url is: https://framerusercontent.com/images/OyfDyvsu1CBZ7okFKxIu5XgJCQ.png

### Section 2: Story
-   **Component:** `src/components/about/Story.tsx` (New)
-   **Content:** "Growing up...sympathy into actions"
-   **Description:** This is a quote or post with Creator: avatar(https://framerusercontent.com/images/0XDpmLX4pzx1BHIKsowMpDpZEsk.png?scale-down-to=1024 ), displayname (Laura Phan) and title (Founder & CEO @Trainizi)
-   **Image:** https://framerusercontent.com/images/WxbEmyL76AsdUM9NstnqPwc.jpg

### Section 3: Vision
-   **Component:** `src/components/about/Vision.tsx` (New)
-   **Content:** "That's the world Trainizi wants to create."
-   **Image:** https://framerusercontent.com/images/mcn5tDtr76yDdjTfkW8IY5dpts.png

### Section 4: Team
-   **Component:** `src/components/about/Team.tsx` (New)
-   **Content:** "Our people."
-   **Description:** This section will showcase the team members.

### Section 4: Advisors
-   **Component:** `src/components/about/Advisors.tsx` (New)
-   **Content:** "Advised and backed by innovators, scientists, educators, investors & entrepreneurs from"
-   **Description:** This section will highlight the company's advisors and backers.

### Section 5: Call to Action (CTA)
-   **Component:** `src/components/about/CTA.tsx` (Existing, but will be updated)
-   **Content:** "Be with us on this journey."
-   **Description:** The final section, encouraging users to engage with the company.


## Implementation Steps

1.  **Create `Journey` component:** Develop the `Journey.tsx` component with the specified content and styling.
2.  **Create `Mission` component:** Develop the `Mission.tsx` component.
3.  **Create `Team` component:** Develop the `Team.tsx` component.
4.  **Create `Advisors` component:** Develop the `Advisors.tsx` component.
5.  **Update `CTA` component:** Modify the existing `CTA.tsx` component to fit the new design.
6.  **Update `about/page.tsx`:** Replace the existing components with the new ones in the correct order.
7.  **Apply Styles:** Ensure all sections adhere to the full-width and max-width requirements.