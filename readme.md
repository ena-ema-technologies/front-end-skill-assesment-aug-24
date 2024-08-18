### Requirement For Front End Development

Cleaning Services Company Website Requirements

We're looking to build a dynamic, feature-rich website that showcases our cleaning services and allows customers to easily purchase these services, send queries, and apply for job positions. Below are the key features and requirements:

Technology Stack:
-----------------
Styling: Raw CSS
Database: MongoDB
Language: TypeScript
Components: Material UI 
Framework: Next.js (App Router)
State Management: Redux Toolkit

Website Key Features:
-------------

- Display all available cleaning services with detailed descriptions, pricing, and images. 
- Easily share service offerings, promotions, and content across popular social media platforms
- Allow customers to customize services by selecting add-ons or special requests based on their needs
- Customers can select and purchase services online, with options for booking specific dates and times.
- Display some static customer reviews and ratings to build trust and help others make informed decisions. 
- Offer bundled cleaning packages with flexible pricing options for regular customers or subscription plans.
- Feature a section for exclusive discounts, loyalty programs, and promotional offers to attract and retain customers 



Service Showcase & Purchase:
----------------------------

Display all available cleaning services with detailed descriptions, pricing, and images.
Customers can select and purchase services online, with options for booking specific dates and times.

Admin & Team Member Management:
-------------------------------

The website owner can easily add, edit, or remove team members through the dashboard, and these updates will automatically reflect on the frontend.

Recruitment and Job Applications:
--------------------------------

A dedicated page where the website owner can post job openings.
Potential candidates can submit their applications directly through the website.
Application statuses can be marked as “Pending,” “Reviewed,” “Shortlisted,” “Hired,” or “Archived” by the admin.

Customer Query Management:
--------------------------

An intuitive and user-friendly contact form where customers can send queries.
Queries will be managed with status labels such as “New,” “Pending,” “Completed,” or “Archived” for efficient handling.

Admin Dashboard for Website Management:
---------------------------------------

An easy-to-use admin panel where the website owner can:

Add, edit, or remove services.
Manage team members dynamically. 
Manage job postings .
Track and respond to job applications.
Track and respond to customer queries.

The website should be fully responsive and accessible, providing a smooth user experience across all devices.

SEO and Performance Optimization:
---------------------------------------

Implement best practices for SEO, so we need perfect structured URL like below:

- www.website.com/services/30423jlskdfs ❌
- www.website.com/services/service-i-need-to-buy ✅

Security Features:
------------------ 

Use Redux Toolkit for state management to securely handle authentication states.
Implement strong authentication using access tokens and refresh tokens with proper token verification with jwt, zod etc.
Secure routes for admin and sensitive operations, ensuring only authenticated and authorized users can access them.

Additional Requirements: 
------------------------ 
Clean and modern UI using Material UI with custom CSS styling.
Seamless integration with MongoDB for dynamic content and data management.
Easy-to-use content management system for non-technical users to update content.
