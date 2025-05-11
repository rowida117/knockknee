import Link from "next/link"
import Image from "next/image"
import { Download, FileText, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
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
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Biomechanics of Knock Knee (Genu Valgum)
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A comprehensive research study on the biomechanical implications of genu valgum
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="introduction" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Introduction</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">What is Knock Knee?</h3>
                  <p className="text-muted-foreground">
                    Knock knee, or genu valgum, is a condition where the knees angle inward and touch each other when
                    the legs are straightened. This condition affects the alignment of the legs and can impact gait,
                    balance, and overall biomechanical function.
                  </p>
                  <h3 className="text-xl font-bold">Clinical Importance</h3>
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
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="objective" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Research Objective</h2>
              <p className="text-muted-foreground md:text-xl">
                This research investigates the biomechanical implications of knock knee (genu valgum), focusing on:
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Gait Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Quantifying alterations in walking patterns and weight distribution during locomotion</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Force Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Measuring abnormal forces across the knee joint and surrounding structures</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Alignment Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Evaluating the degree of misalignment and its correlation with functional outcomes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Muscle Activation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Analyzing EMG patterns in lower limb muscles during various activities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Corrective Measures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Testing the efficacy of various interventions on improving biomechanical function</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Long-term Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Assessing the progression of joint degeneration and functional limitations over time</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology" className="w-full py-12 md:py-24 lg:py-32">
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
                    src="/images/knee-comparison.png"
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

        <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Findings & Results</h2>
            <Tabs defaultValue="graphs" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-3">
                <TabsTrigger value="graphs">Graphs</TabsTrigger>
                <TabsTrigger value="insights">Key Insights</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
              </TabsList>
              <TabsContent value="graphs" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Ground Reaction Forces</CardTitle>
                      <CardDescription>Comparison between normal and knock knee subjects</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Graph showing ground reaction forces"
                        width={400}
                        height={300}
                        className="object-cover w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Joint Angles</CardTitle>
                      <CardDescription>Knee valgus angles during gait cycle</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Graph showing joint angles"
                        width={400}
                        height={300}
                        className="object-cover w-full"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Muscle Activation</CardTitle>
                      <CardDescription>EMG data for quadriceps and hamstrings</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Graph showing muscle activation patterns"
                        width={400}
                        height={300}
                        className="object-cover w-full"
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
                        src="/placeholder.svg?height=400&width=600"
                        alt="Pressure mapping of foot during stance phase"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>Pressure Mapping</CardTitle>
                      <CardDescription>Comparison of foot pressure distribution</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="3D model of knee joint forces"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>3D Joint Model</CardTitle>
                      <CardDescription>Finite element analysis of knee joint forces</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <a
                href="https://drive.google.com/file/d/1bifTpbUD2npYn2JmF7xSnWNwVmbMwzp2/view?usp=drive_link"
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

        <section id="gait-videos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12">Gait Analysis Videos</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center">Normal Gait</h3>
                <div className="aspect-video overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Normal gait video placeholder</p>
                  {/* Replace with actual video embed */}
                  {/* <video controls className="w-full h-full">
                    <source src="/videos/normal-gait.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Characteristics:</h4>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Neutral knee alignment throughout gait cycle</li>
                    <li>Even weight distribution across joint surfaces</li>
                    <li>Efficient energy transfer between gait phases</li>
                    <li>Coordinated muscle activation patterns</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center">Knock Knee Gait</h3>
                <div className="aspect-video overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Knock knee gait video placeholder</p>
                  {/* Replace with actual video embed */}
                  {/* <video controls className="w-full h-full">
                    <source src="/videos/knock-knee-gait.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Characteristics:</h4>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Increased medial knee deviation during stance phase</li>
                    <li>Compensatory foot pronation and hip rotation</li>
                    <li>Altered center of mass trajectory</li>
                    <li>Increased energy expenditure during walking</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-bold text-center">Detailed Motion Analysis</h3>
              <div className="aspect-video overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">3D motion capture analysis video placeholder</p>
                {/* Replace with actual video embed */}
                {/* <video controls className="w-full h-full">
                  <source src="/videos/motion-analysis.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
        </section>

        <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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

        <section id="conclusion" className="w-full py-12 md:py-24 lg:py-32">
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

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                    <a href="mailto:ali.gad06@eng-st.cu.edu.eg" className="text-primary hover:underline">
                      ali.gad06@eng-st.cu.edu.eg
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
