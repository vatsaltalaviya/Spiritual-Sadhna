# Content Restructuring Rules

This document outlines the rules for restructuring and adding content to the Spiritual Sadhna website. All agents must strictly adhere to these rules and the technical standards defined in @[agent.md].

## Rule 1: Content Addition & Verification
When a new "tab" or content section is provided:
1. **Global Search:** Perform a comprehensive scan of the entire codebase to check if the content already exists.
2. **Duplicate & Similarity Check:** 
   - If the content exists on any page, **do not** add it again.
   - **Content Comparison:** If the provided tab content is substantially similar to the current content of an existing page, no changes are required. 
   - **Update Trigger:** Only modify or replace content if the provided version introduces new information, corrections, or a different structure that improves the page.
3. **Condition for Addition:** If the content is missing from the entire site, proceed to add it.

## Rule 2: Page Separation & Navigation
To maintain a clean and focused user experience:
1. **Single-Purpose Pages:** Each page should ideally represent a single "tab" or major content category.
2. **Splitting Content:** 
   - If a page contains two distinct "tab" contents (e.g., Lineage and Guru Sisya in one file), they must be separated.
   - Separate the secondary content into its own new HTML page.
3. **Execution Standards:** 
   - Any new page created **must follow the technical and aesthetic directives in @[agent.md]**.
   - This includes using correct colors (#F07D3E, #0B1B36), fonts (Playfair Display for headings, Inter for body), and Tailwind CSS implementation.
4. **Navigation Updates:** 
   - For every new page created, a corresponding link must be added to the header navigation.
   - Navigation links must follow the 2-row layout rules defined in the site design (max 10 links per row).

## Rule 3: Header Navigation Standards
- **Link Capacity:** Maximum of 10 links per row.
- **Multi-Row Support:** If total links exceed 10, the header must accommodate a second row.
- **Mobile Usability:** The mobile sidepanel must support vertical scrolling (`overflow-y-auto`) to ensure accessibility for all 16+ potential links.

## Rule 4: Scope of Modification
- **Specific File Context:** If the user provides a direct reference to a specific file (e.g., @[filename]), perform modifications **only** within that file.
- **Global Scope:** If no file context is provided, you must check the entire codebase to maintain consistency and determine the appropriate location for new or updated content according to Rules 1 and 2.
