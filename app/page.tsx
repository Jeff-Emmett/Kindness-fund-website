import { Header } from "@/components/header"
import { StreamCanvas } from "@/components/stream-canvas"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Share2, Zap } from "lucide-react"
import { SubmissionForm } from "@/components/submission-form"
import { AllocationDashboard } from "@/components/allocation-dashboard"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <StreamCanvas />
      <Header />

      <main className="flex-1 flex flex-col relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <div className="container mx-auto flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary shadow-[0_0_20px_rgba(0,243,255,0.3)] backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Zap className="mr-2 h-4 w-4 fill-current" />
              <span className="font-medium">Live Fund Streaming Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Turn Kindness into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
                Infinite Value
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Submit your good deeds. The community directs the flow of funds to what matters most. Real-time rewards
              for real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button
                size="lg"
                className="text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-background font-bold shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all hover:scale-105"
              >
                Submit Act of Kindness
                <Heart className="ml-2 h-5 w-5 fill-current" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all"
              >
                View Live Streams
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Total Value Streamed", value: "$1,240,500", icon: Zap, color: "text-primary" },
              { label: "Acts Rewarded", value: "15,420", icon: Heart, color: "text-secondary" },
              { label: "Community Allocators", value: "8,930", icon: Share2, color: "text-accent" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl flex items-center space-x-4 hover:bg-white/10 transition-colors cursor-default"
              >
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Form Section */}
        <section id="submit" className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Share Your <br />
                  <span className="text-primary">Light</span> with the World
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Every act of kindness creates a ripple. When you share your story, you allow the community to
                  recognize that value and amplify it through direct funding streams.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Transparency", desc: "All allocations are visible on the public stream." },
                    { title: "Direct Impact", desc: "Funds flow directly to the acts deemed most valuable." },
                    { title: "Community Governed", desc: "The collective decides where the stream flows." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Background blob for form */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 transform rotate-3 scale-105" />
                <SubmissionForm />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="py-12 bg-muted/30 border-t relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05),transparent_70%)]" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">The Flow of Kindness</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Control the stream. Adjust the sliders to direct real-time value to the acts that resonate with you.
              </p>
            </div>

            <AllocationDashboard />
          </div>
        </section>
      </main>
    </div>
  )
}
