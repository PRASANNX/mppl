'use client';

import Navbar from "@/components/mppl/Navbar";
import Footer from "@/components/mppl/Footer";
import { Scale, Shield, Award, PlayCircle, Eye, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";

export default function RulesPage() {
  const rulesList = [
    {
      num: "1",
      title: "Eligibility",
      points: [
        "Every player must complete the official MPPL registration process.",
        "Players must provide a valid government-issued photo ID during registration.",
        "A player may represent only one franchise during the league season unless officially transferred by the League Management Committee.",
        "Participation confirms acceptance of all MPPL rules, regulations, and disciplinary policies."
      ],
      icon: <Award className="text-neon-green" size={24} />
    },
    {
      num: "2",
      title: "Tournament Format",
      points: [
        "The tournament will be conducted according to the official MPPL schedule.",
        "All players must report at least 30 minutes before their scheduled match.",
        "Failure to report within 10 minutes of the scheduled match time may result in a walkover."
      ],
      icon: <PlayCircle className="text-neon-orange" size={24} />
    },
    {
      num: "3",
      title: "Match Format",
      points: [
        <strong>League Stage</strong>,
        "• One game to 15 Rally Points.",
        "• Every rally won earns one point.",
        "• 15-15 (GOLDEN POINT).",
        <strong>Semi-Finals</strong>,
        "• One game to 15 Service Points.",
        "• Only the serving side can score.",
        "• 14-14 (DEUCE RULE).",
        <strong>Finals</strong>,
        "• Best of 3 Games.",
        "• Each game is played to 11 points.",
        "• Win by 2 points (Deuce Rule)."
      ],
      icon: <Scale className="text-neon-green" size={24} />
    },
    {
      num: "4",
      title: "Official Playing Rules",
      points: [
        "Matches will be played under the latest USA Pickleball/International Pickleball Federation (IPF) rules unless specifically modified by MPPL.",
        "All line calls made by appointed officials are final.",
        "Players must respect referees, line judges, and tournament officials at all times."
      ],
      icon: <Shield className="text-neon-orange" size={24} />
    },
    {
      num: "5",
      title: "Equipment",
      points: [
        "Only USAP/IPF-approved paddles are permitted.",
        "Tournament balls will be supplied by MPPL.",
        "Players must wear proper non-marking court shoes.",
        "Appropriate sports attire is mandatory."
      ],
      icon: <CheckCircle2 className="text-neon-green" size={24} />
    },
    {
      num: "6",
      title: "Player Conduct",
      points: [
        <strong>Players shall:</strong>,
        "• Display professionalism and sportsmanship.",
        "• Respect opponents, officials, volunteers, and spectators.",
        "• Follow the Code of Conduct throughout the event.",
        "• Shake hands or acknowledge opponents after every match.",
        <strong>Players shall not:</strong>,
        "• Use abusive, offensive, or threatening language.",
        "• Throw paddles or equipment.",
        "• Deliberately delay play.",
        "• Damage tournament property.",
        "• Engage in unsportsmanlike behavior."
      ],
      icon: <AlertTriangle className="text-neon-orange" size={24} />
    },
    {
      num: "7",
      title: "Time-Outs",
      points: [
        "Each team is entitled to one time-out per game.",
        "Time-out duration: 60 seconds.",
        "Medical time-outs may be granted only with approval from the Tournament Referee."
      ],
      icon: <CheckCircle2 className="text-neon-green" size={24} />
    },
    {
      num: "8",
      title: "Injury & Medical Assistance",
      points: [
        "Tournament medical staff will provide first aid.",
        "Players declared medically unfit may be withdrawn from the competition.",
        "MPPL is not responsible for injuries sustained during play."
      ],
      icon: <AlertTriangle className="text-neon-orange" size={24} />
    },
    {
      num: "9",
      title: "Code of Ethics",
      points: [
        "Every MPPL player agrees to compete fairly.",
        "Avoid cheating or intentional rule violations.",
        "Respect officials' decisions.",
        "Promote the image and integrity of MPPL.",
        "Encourage fair play and positive competition."
      ],
      icon: <Shield className="text-neon-green" size={24} />
    },
    {
      num: "10",
      title: "Anti-Doping Policy",
      points: [
        "MPPL follows a zero-tolerance policy toward banned performance-enhancing substances.",
        "The League reserves the right to conduct testing whenever deemed necessary.",
        "Any violation may result in suspension, disqualification, forfeiture of prize money, and future bans."
      ],
      icon: <AlertTriangle className="text-neon-orange" size={24} />
    },
    {
      num: "11",
      title: "Disciplinary Action",
      points: [
        "The Tournament Committee may impose: Verbal Warning, Official Warning, Point Penalty, Game Penalty, Match Forfeit, Disqualification, or Suspension from future MPPL events.",
        "Serious misconduct may also result in financial penalties or franchise disciplinary action."
      ],
      icon: <Shield className="text-neon-green" size={24} />
    },
    {
      num: "12",
      title: "Walkovers",
      points: [
        "A match may be awarded as a walkover if: a player fails to report on time, withdraws before the match, is medically unable to continue, or is disqualified by tournament officials."
      ],
      icon: <AlertTriangle className="text-neon-orange" size={24} />
    },
    {
      num: "13",
      title: "Photography & Media Rights",
      points: [
        "MPPL owns all photography, video, television, streaming, and promotional rights.",
        "Players consent to the use of their name, image, likeness, and match footage for promotional, commercial, and media purposes without additional compensation."
      ],
      icon: <Eye className="text-neon-green" size={24} />
    },
    {
      num: "14",
      title: "Sponsorship & Branding",
      points: [
        "Personal sponsorship branding must receive prior written approval from MPPL.",
        "Unauthorized advertising or promotional material is prohibited."
      ],
      icon: <Award className="text-neon-orange" size={24} />
    },
    {
      num: "15",
      title: "Protest & Appeals",
      points: [
        "Protests must be submitted in writing within 30 minutes of the match conclusion.",
        "The decision of the Tournament Committee shall be final and binding."
      ],
      icon: <Scale className="text-neon-green" size={24} />
    },
    {
      num: "16",
      title: "Tournament Authority",
      points: [
        "The MPPL Organizing Committee reserves all rights to amend tournament schedules, modify rules due to unforeseen circumstances, interpret any rule not specifically covered, and make final decisions on all disputes."
      ],
      icon: <Shield className="text-neon-orange" size={24} />
    }
  ];

  return (
    <div className="bg-deep-court min-h-screen text-net-white flex flex-col w-full overflow-hidden">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 relative">
        {/* Background Decorative Typography */}
        <div className="absolute top-20 right-0 font-bebas text-[clamp(150px,30vw,400px)] text-net-white/[0.03] leading-none pointer-events-none select-none text-right overflow-hidden z-0">
          RULES
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-orange"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-orange">
                LEG 1 OFFICIALS
              </span>
            </div>

            <h1 className="font-bebas text-[clamp(60px,8vw,120px)] leading-[0.85] text-net-white uppercase tracking-tight mb-8">
              RULES &amp; <span className="text-neon-orange">REGULATIONS</span>
            </h1>

            <p className="font-dm-sans text-xl md:text-2xl text-net-white/80 font-bold max-w-3xl leading-relaxed">
              Madhya Pradesh Premier League (MPPL) Official Player Rules &amp; Regulations. All participants must review and adhere to these standards.
            </p>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {rulesList.map((rule, idx) => (
              <div 
                key={idx} 
                className="bg-pure-black border-2 border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-neon-orange transition-all duration-300 relative group"
                style={{
                  boxShadow: '8px 8px 0px rgba(255, 96, 0, 0.05)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-bebas text-4xl text-neon-orange">
                      {rule.num.padStart(2, '0')}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      {rule.icon}
                    </div>
                  </div>
                  <h3 className="font-bebas text-2xl text-net-white mb-4 tracking-wide uppercase">{rule.title}</h3>
                  <div className="space-y-3">
                    {rule.points.map((pt, pIdx) => (
                      <p key={pIdx} className="font-dm-sans text-sm text-net-white/70 leading-relaxed">
                        {pt}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Player Pledge Section */}
          <div className="bg-neon-orange text-pure-black p-8 md:p-12 mb-16 border-4 border-pure-black shadow-[16px_16px_0px_rgba(0,0,0,0.5)]">
            <h2 className="font-bebas text-4xl mb-4 uppercase tracking-wide">MPPL PLAYER PLEDGE</h2>
            <blockquote className="font-dm-sans text-xl md:text-2xl font-bold leading-relaxed italic">
              &ldquo;I will compete with honesty, respect my opponents and officials, uphold the spirit of fair play, and proudly represent myself and the Madhya Pradesh Pickleball League with integrity, professionalism, and sportsmanship.&rdquo;
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
