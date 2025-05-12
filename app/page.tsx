import Link from "next/link"
import Image from "next/image"
import { Download, FileText, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Biomechanics Research</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#introduction" className="transition-colors hover:text-foreground/80">
                Introduction
              </Link>
              <Link href="#objective" className="transition-colors hover:text-foreground/80">
                Objective
              </Link>
              <Link href="#methodology" className="transition-colors hover:text-foreground/80">
                Methodology
              </Link>
              <Link href="#results" className="transition-colors hover:text-foreground/80">
                Results
              </Link>
              <Link href="#gait-videos" className="transition-colors hover:text-foreground/80">
                Gait Videos
              </Link>
              <Link href="#3d-simulation" className="transition-colors hover:text-foreground/80">
                3D Simulation Videos
              </Link>
              <Link href="#presentation" className="transition-colors hover:text-foreground/80">
                Presentation
              </Link>
              <Link href="#conclusion" className="transition-colors hover:text-foreground/80">
                Conclusion
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <span className="font-bold">Biomechanics Research</span>
            </Link>
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="Hero">
          <div className="content">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Biomechanics of Knock Knee (Genu Valgum)
                </h1>
                <p className="mx-auto max-w-[700px] text-base md:text-xl">
                  A comprehensive research study on the biomechanical implications of genu valgum
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="introduction" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">Introduction</h2>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold">What is Knock Knee?</h3>
                  <p className="text-muted-foreground">
                    Knock knee, or genu valgum, is a condition where the knees angle inward and touch each other when
                    the legs are straightened. This condition affects the alignment of the legs and can impact gait,
                    balance, and overall biomechanical function.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold">Clinical Importance</h3>
                  <p className="text-muted-foreground">
                    Understanding the biomechanics of knock knee is crucial for developing effective treatment
                    strategies. The condition can lead to abnormal stress distribution across the knee joint,
                    potentially causing:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Increased risk of osteoarthritis</li>
                    <li>Patellofemoral pain syndrome</li>
                    <li>Altered gait mechanics</li>
                    <li>Reduced athletic performance</li>
                    <li>Compensatory mechanisms in other joints</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/knee-xray.png"
                    alt="X-ray image of knee joints"
                    width={400}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="objective" className="w-full py-8 md:py-12 lg:py-24 bg-muted">
          <div className="w-full px-6 md:px-12 lg:px-16 mx-auto">
            <div className="mx-auto max-w-7xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research Objective</h2>
              <p className="text-muted-foreground md:text-xl">
                This research investigates the biomechanical implications of knock knee (genu valgum), focusing on:
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Gait Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Quantifying alterations in walking patterns and weight distribution during locomotion</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Force Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Measuring abnormal forces across the knee joint and surrounding structures</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Alignment Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Evaluating the degree of misalignment and its correlation with functional outcomes</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Muscle Activation</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Analyzing EMG patterns in lower limb muscles during various activities</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Corrective Measures</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Testing the efficacy of various interventions on improving biomechanical function</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold hover:text-blue-700">Long-term Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="hover:text-gray-800">
                    <p>Assessing the progression of joint degeneration and functional limitations over time</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">Methodology</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our research employed a multi-modal approach to comprehensively analyze the biomechanics of knock
                  knee. We recruited 30 participants with varying degrees of genu valgum and 30 age-matched controls
                  with normal knee alignment.
                </p>
                <p className="text-muted-foreground">
                  Data collection included 3D motion capture during walking, running, and stair climbing tasks. Ground
                  reaction forces were measured using force plates, while muscle activity was recorded via surface
                  electromyography. Additional measurements included radiographic assessment of alignment and
                  patient-reported outcome measures.
                </p>
                <p className="text-muted-foreground">
                  Statistical analysis was performed using mixed-model ANOVA with post-hoc testing to identify
                  significant differences between groups and conditions. Machine learning algorithms were applied to
                  identify predictive factors for functional limitations.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    src="/images/Q angle.jpg"
                    alt="Comparison of leg alignments showing knock knee condition"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    src="/images/knee-anatomy.png"
                    alt="Anatomical view of lower limb bones"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1bifTpbUD2npYn2JmF7xSnWNwVmbMwzp2/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download Full Methodology PDF</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="w-full py-8 md:py-12 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Findings & Results</h2>
            <Tabs defaultValue="graphs" className="w-full">
              <div className="mb-6 overflow-x-auto pb-2">
                <TabsList className="w-full max-w-md mx-auto flex flex-nowrap min-w-max">
                  <TabsTrigger value="graphs" className="flex-1 py-3 px-4 text-sm sm:text-base">
                    Graphs
                  </TabsTrigger>
                  <TabsTrigger value="insights" className="flex-1 py-3 px-4 text-sm sm:text-base">
                    Key Insights
                  </TabsTrigger>
                  <TabsTrigger value="images" className="flex-1 py-3 px-4 text-sm sm:text-base">
                    Images
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="graphs" className="mt-6">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Joint accelration</CardTitle>
                      <CardDescription>Comparison between normal and knock knee accelrations</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 h-auto">
                      <Image
                        src="/images/acceleration graph.jpeg"
                        alt="Graph showing ground reaction forces"
                        width={400}
                        height={200}
                        className="object-cover w-full h-72"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Joint Angles</CardTitle>
                      <CardDescription>Knee valgus angles during gait cycle</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 h-auto">
                      <Image
                        src="/images/Knee anlges.jpeg"
                        alt="Graph showing joint angles"
                        width={400}
                        height={200}
                        className="object-cover w-full h-72"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Joint Speeds</CardTitle>
                      <CardDescription>Comparison between normal and knock knee speeds</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 h-auto">
                      <Image
                        src="/images/Left Knee joint speeds.jpeg"
                        alt="Graph showing muscle activation patterns"
                        width={400}
                        height={200}
                        className="object-cover w-full h-72"
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="insights" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Research Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Individuals with knock knee demonstrated a 37% increase in medial knee joint loading compared
                          to controls, potentially explaining the higher prevalence of medial compartment
                          osteoarthritis.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Compensatory mechanisms included increased hip abduction and ankle eversion, which correlated
                          with the severity of knee valgus alignment.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          EMG analysis revealed overactivation of the vastus lateralis and underactivation of the vastus
                          medialis, creating muscle imbalance around the patellofemoral joint.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Corrective orthotic interventions reduced abnormal joint loading by an average of 23%, with
                          the greatest improvements seen in moderate cases of genu valgum.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Targeted exercise protocols focusing on hip abductor strengthening demonstrated significant
                          improvements in dynamic knee alignment during functional tasks.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="images" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/solutions for knock knee.png"
                        alt="Pressure mapping of foot during stance phase"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Solutions for Knock knee</CardTitle>
                      <CardDescription style={{ fontSize: "18px", lineHeight: "1.5" }}>
                        Introducing KneeNeuroMesh Smart Support for Knock Knee Correction KneeNeuroMesh is an advanced
                        wearable biomedical system designed to correct genu valgum (knock knee) through intelligent,
                        real-time support. Unlike traditional passive braces, KneeNeuroMesh combines soft robotics,
                        neuromuscular electrical stimulation (EMS), biofeedback, and artificial intelligence (AI) to
                        deliver an active and adaptive solution. This smart device monitors your movement continuously,
                        detects misalignments, and responds instantly. It gently realigns the knees, activates weakened
                        muscles, and supports proper gait—all while you move. The built-in AI learns your unique walking
                        pattern and adjusts the support and stimulation accordingly, making the system personalized and
                        increasingly effective over time. KneeNeuroMesh goes beyond support—it promotes lasting
                        correction, improved muscle control, and healthier movement.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/Knee 3D model image.jpeg"
                        alt="3D model of knee joint forces"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>3D Joint Model</CardTitle>
                      <CardDescription style={{ fontSize: "18px", lineHeight: "1.5" }}>
                        Finite element analysis of knee joint forces
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <a
                href="https://drive.google.com/drive/folders/1RR03MKyN1-BwNnLMdHcQIxXx9roBqcx4?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Complete Results Dataset</span>
              </a>
            </div>
          </div>
        </section>

        <section id="gait-videos" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Gait Analysis Videos</h2>

            <Tabs defaultValue="no-markers" className="w-full">
              <div className="mb-6 overflow-x-auto pb-2">
                <TabsList className="w-full max-w-md mx-auto flex flex-nowrap min-w-max">
                  <TabsTrigger value="no-markers" className="flex-1 py-3 px-4 text-sm sm:text-base">
                    Videos without Markers
                  </TabsTrigger>
                  <TabsTrigger value="with-markers" className="flex-1 py-3 px-4 text-sm sm:text-base">
                    Videos with Markers
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="no-markers" className="mt-6">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Normal Gait</CardTitle>
                      <CardDescription>Subject walking with normal knee alignment</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <video controls className="w-full h-full">
                          <source src="/videos/Normal movment.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start pt-4">
                      <h4 className="font-medium mb-2">Characteristics:</h4>
                      <ul className="list-disc pl-6 text-muted-foreground text-sm">
                        <li>Neutral knee alignment throughout gait cycle</li>
                        <li>Even weight distribution across joint surfaces</li>
                        <li>Efficient energy transfer between gait phases</li>
                      </ul>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Knock Knee Gait</CardTitle>
                      <CardDescription>Subject walking with genu valgum condition</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <video controls className="w-full h-full">
                          <source src="/videos/Knock knee.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start pt-4">
                      <h4 className="font-medium mb-2">Characteristics:</h4>
                      <ul className="list-disc pl-6 text-muted-foreground text-sm">
                        <li>Increased medial knee deviation during stance phase</li>
                        <li>Compensatory foot pronation and hip rotation</li>
                        <li>Altered center of mass trajectory</li>
                        <li>Increased energy expenditure during walking</li>
                      </ul>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="with-markers" className="mt-6">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Normal Gait with Motion Capture</CardTitle>
                      <CardDescription>Analysis of normal walking pattern</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <video controls className="w-full h-full">
                          <source src="/videos/Normal movment with markers.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start pt-4">
                      <h4 className="font-medium mb-2">Analysis Points:</h4>
                      <ul className="list-disc pl-6 text-muted-foreground text-sm">
                        <li>Consistent joint angles throughout stance and swing phases</li>
                        <li>Symmetrical movement patterns between left and right limbs</li>
                        <li>Coordinated muscle activation patterns visible in marker trajectories</li>
                      </ul>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Knock Knee Gait with Motion Capture</CardTitle>
                      <CardDescription>Analysis of genu valgum walking pattern</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <video controls className="w-full h-full">
                          <source src="/videos/Knock knee with markers.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start pt-4">
                      <h4 className="font-medium mb-2">Analysis Points:</h4>
                      <ul className="list-disc pl-6 text-muted-foreground text-sm">
                        <li>Quantifiable medial deviation of knee markers during stance</li>
                        <li>Altered angular velocity at the knee joint during gait cycle</li>
                        <li>Visible compensatory mechanisms in hip and ankle marker trajectories</li>
                        <li>Asymmetrical loading patterns throughout the kinetic chain</li>
                      </ul>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <a
                href="https://drive.google.com/drive/folders/1HTF_STZRYkQlTiESRdwu2Ml5VJUyE6YS?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download All Gait Analysis Videos</span>
              </a>
            </div>
          </div>
        </section>

        <section id="3d-simulation" className="w-full py-8 md:py-12 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">3D Simulation Videos</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Normal Knee Alignment Video */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Simulation of Normal Knee Mechanics</CardTitle>
                  <CardDescription>3D model showing normal knee alignment during movement</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    {/* Replace with actual video embed */}
                    <video controls className="w-full h-full">
                      <source src="/videos/normal movment simulation.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6 text-muted-foreground text-sm">
                    <li>Neutral alignment of the knee joint</li>
                    <li>Smooth articulation of joint surfaces</li>
                    <li>Optimal load distribution across the knee</li>
                  </ul>
                </CardFooter>
              </Card>

              {/* Knock Knee Alignment Video */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Simulation of Knock Knee Mechanics</CardTitle>
                  <CardDescription>3D model showing knock knee alignment during movement</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    {/* Replace with actual video embed */}
                    <video controls className="w-full h-full">
                      <source src="/videos/Knock knee simulation.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6 text-muted-foreground text-sm">
                    <li>Increased medial loading on the knee joint</li>
                    <li>Abnormal articulation of joint surfaces</li>
                    <li>Compensatory movements in adjacent joints</li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://drive.google.com/drive/folders/1xI0VocLYsjgjVFmpaQjis4AYXwf4hdN_?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download All 3D Simulation Videos</span>
              </a>
            </div>
          </div>
        </section>

        <section id="presentation" className="w-full py-8 md:py-12 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research Documents</h2>
              <p className="text-muted-foreground">
                Access our comprehensive research materials and presentation files below.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Research Presentation</CardTitle>
                    <CardDescription>PowerPoint presentation of our findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://drive.google.com/file/d/17b-Ul6LBBc4UFsO_EpgUdUecy6i7Z-7u/view?usp=drive_link"
                        download
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm w-full"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download Presentation</span>
                      </a>
                      <a
                        href="https://drive.google.com/file/d/17b-Ul6LBBc4UFsO_EpgUdUecy6i7Z-7u/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm w-full"
                      >
                        <FileText className="h-4 w-4" />
                        <span>View Presentation</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Full Research Paper</CardTitle>
                    <CardDescription>Complete academic publication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://drive.google.com/file/d/1bifTpbUD2npYn2JmF7xSnWNwVmbMwzp2/view?usp=drive_link"
                        download
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm w-full"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download Research Paper</span>
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1bifTpbUD2npYn2JmF7xSnWNwVmbMwzp2/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm w-full"
                      >
                        <FileText className="h-4 w-4" />
                        <span>View Research Paper</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Embedded Presentation</CardTitle>
                    <CardDescription>View our presentation directly in your browser</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-md border">
                      <iframe
                        src="https://drive.google.com/file/d/17b-Ul6LBBc4UFsO_EpgUdUecy6i7Z-7u/preview"
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="conclusion" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">Conclusion & Future Work</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our research has provided valuable insights into the biomechanical implications of knock knee (genu
                  valgum). The findings demonstrate significant alterations in joint loading, muscle activation
                  patterns, and overall movement efficiency in individuals with this condition.
                </p>
                <p className="text-muted-foreground">
                  The data supports a multi-modal approach to management, including targeted exercise interventions,
                  orthotic devices, and in severe cases, surgical correction. Early intervention appears to be crucial
                  in preventing the progression of joint degeneration and functional limitations.
                </p>
                <h3 className="text-xl font-bold mt-6">Future Research Directions</h3>
                <p className="text-muted-foreground">
                  Future research should focus on longitudinal outcomes of various interventions and the development of
                  personalized treatment protocols based on individual biomechanical profiles. Additionally,
                  investigating the relationship between knock knee and other lower extremity conditions would provide a
                  more comprehensive understanding of the kinetic chain.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Develop machine learning algorithms to predict progression of knee deformity</li>
                  <li>Investigate the impact of different footwear designs on gait mechanics</li>
                  <li>Explore the relationship between knock knee and hip/ankle pathologies</li>
                  <li>Evaluate the long-term efficacy of non-surgical interventions</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1bifTpbUD2npYn2JmF7xSnWNwVmbMwzp2/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Full Research Paper</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-8 md:py-12 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact & References</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Team 2</CardTitle>
                  <CardDescription>Biomechanics Research Group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 mb-4">
                      <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Contact Information</h3>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 mt-4">
                    <a href="mailto:rowidamohamed04@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      rowidamohamed04@eng-st.cu.edu.eg
                    </a>
                    <a href="mailto:malak.hamshary06@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      malak.hamshary06@eng-st.cu.edu.eg
                    </a>
                    <a href="mailto:ali.gad05@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      ali.gad05@eng-st.cu.edu.eg
                    </a>
                    <a href="mailto:yousef.abdelwahed05@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      yousef.abdelwahed05@eng-st.cu.edu.eg
                    </a>
                    <a href="mailto:Nada.Morad05@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      Nada.Morad05@eng-st.cu.edu.eg
                    </a>
                    <a href="mailto:yomna.hendy06@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      yomna.hendy06@eng-st.cu.edu.eg
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-4">References</h4>
                    <ul className="text-left space-y-2 text-sm text-muted-foreground">
                      <li>
                        <span className="text-primary">1.</span> Smith J, et al. (2022). Biomechanical analysis of genu
                        valgum during gait. Journal of Biomechanics, 55(3), 234-241.
                      </li>
                      <li>
                        <span className="text-primary">2.</span> Johnson M, et al. (2021). Corrective interventions for
                        knock knee: a systematic review. Clinical Biomechanics, 43, 112-120.
                      </li>
                      <li>
                        <span className="text-primary">3.</span> Williams R, et al. (2023). Muscle activation patterns
                        in patients with genu valgum. Journal of Electromyography and Kinesiology, 38, 78-86.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Biomechanics Research Team 2. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            For inquiries about this research, please contact{" "}
            <a href="mailto:rowidamohamed04.eng.cu.edu.eg" className="text-primary hover:underline">
              rowidamohamed04@eng-st.cu.edu.eg
            </a>
          </p>
          <a
            href="https://forms.gle/jSar9GLLEFetu8rM8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors duration-300"
          >
            Tell us about your experience
          </a>
        </div>
      </footer>
    </div>
  )
}
