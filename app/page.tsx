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
                #RealValue
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Submit your good deeds. The community directs the flow of funds to what matters most. Real-time rewards
              for real-world impact.
            </p>

            <p className="text-lg md:text-xl italic text-primary/80 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-250 font-medium tracking-wide">
              It&apos;s not about making money &mdash; it&apos;s about making <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-bold not-italic uppercase">change</span>.
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

        {/* Kind Acts Pool explanation section */}
        <section className="py-24 container mx-auto px-4">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-50" />

            <div className="relative z-10 space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  The <span className="text-primary">Kind Acts Pool</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A communal fund that anyone can contribute to, and the community collectively directs toward acts of
                  kindness. Because it&apos;s not about making money &mdash; it&apos;s about making <span className="text-accent font-semibold">change</span>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Open Contribution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Anyone can seed the Kind Acts Pool with funds. Every contribution grows the collective ability
                        to reward kindness in the community.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Community Allocation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Members direct the flow of funds to acts they find meaningful. The more acts of kindness you've
                        done, the greater your allocation power.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">No Account Required to Receive</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Recipients don't need to be members. They receive an email notification that #RealValue is
                        waiting for them as a reward for their kindness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Earn Allocation Power</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Do more acts of kindness, gain more influence. Your history of good deeds amplifies your voice
                        in directing the pool to others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-center">
                <div className="inline-flex flex-col items-center space-y-4 glass rounded-2xl p-6 bg-white/5">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                    Current Pool Balance
                  </p>
                  <p className="text-5xl font-bold text-primary font-mono">$18,450</p>
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-background font-bold shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all hover:scale-105">
                    Seed the Pool
                    <Zap className="ml-2 h-4 w-4 fill-current" />
                  </Button>
                </div>
              </div>
            </div>
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
                    { title: "Not Money — Change", desc: "It's not about making money, it's about making change. Every act ripples outward." },
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

        {/* Funz Quest Crossover Banner */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto border border-primary/20">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                It&apos;s not about making money &mdash; it&apos;s about making{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
                  CHANGE
                </span>.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                And sometimes making change starts with having a little fun. Join the quest for funz &mdash; where
                vibes become value and kindness becomes currency.
              </p>
              <a
                href="https://funz.quest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 px-6 py-3 text-sm font-medium transition-all hover:scale-105 backdrop-blur-sm"
              >
                <span>🎲</span>
                <span>Begin the Quest for Funz</span>
                <ArrowRight className="h-4 w-4" />
              </a>
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
