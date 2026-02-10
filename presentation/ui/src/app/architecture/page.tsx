
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ArchitecturePage() {
  return (
    <>
      <div className="flex flex-col">
        <section className="relative w-full h-[30vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          <div className="relative z-20 flex flex-col items-center gap-4 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
              About this demo
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
              A high-level overview of the project's architecture.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Architecture Diagram</h2>
            <p className="mt-4 text-muted-foreground">
              The following diagram illustrates the overall architecture of the Nebula Foundry project.
            </p>
            <div className="mt-8">
              <img src="/images/architecture.png" alt="Architecture Diagram" className="mx-auto" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Repository</h2>
            <p className="mt-4 text-muted-foreground">
              The source code for this project is hosted on GitHub. You can find the repository at the following link:
            </p>
            <a href="https://github.com/pedroccorreia/nebula_foundry" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:underline">
              nebula-foundry-repo
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Demo Script</h2>
            <p className="mt-4 text-muted-foreground">
              To get a quick tour of the application, follow these steps:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Navigate to the "Browse" page to see a list of available movies.</li>
              <li>Click on a movie to see its details and available shorts.</li>
              <li>Play a short to see the video player in action.</li>
              <li>Use the "Inspire Me" feature to get a random short suggestion.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Content and Metadata Review</h2>
            <p className="mt-4 text-muted-foreground">
              Please review the following elements, which primarily serve as data points for on-site and off-platform search and promotion:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li><b>Front Page Panels:</b> Check the pre-rolls associated with the panels on the front page.</li>
              <li><b>Movies Section:</b> Go to the movies section and examine the following generated metadata:
                <ul className="mt-2 list-disc list-inside ml-4 space-y-2">
                  <li><b>Summary:</b> Review the general metadata/summary.</li>
                  <li><b>Shorts:</b> Check the 5 promotional shorts that were automatically picked. (Note: These are potential assets for off-platform push).</li>
                  <li><b>Categorization:</b> Review the categorization, particularly the output related to Gracenote categorization.</li>
                </ul>
              </li>
              <li><b>Player Features (Chapterization & Transcription):</b>
                <ul className="mt-2 list-disc list-inside ml-4 space-y-2">
                  <li><b>Chapterization:</b> Test the functionality: filter by moment type, then click on a moment to ensure the player jumps to the correct section.</li>
                  <li><b>Transcription:</b> Review the generated transcription text.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Search Functionality Test</h2>
            <p className="mt-4 text-muted-foreground">
              Since all the data above (metadata, shorts, chapterization, transcription, and categorization) can be used for search, please test the on-site search functionality:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Go to the top-right corner and search for "deepmind".</li>
              <li>Play around with additional search terms to thoroughly test the results.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
