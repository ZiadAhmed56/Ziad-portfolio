import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ZiadAhmedPortfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto font-sans text-neutral-900 bg-gradient-to-b from-white to-slate-100">
      <header className="mb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold">
          Ziad Ahmed
        </motion.h1>
        <p className="mt-4 text-lg">In an endless wave of data, I chose to be a Data Scientist to unlock its full power.</p>
        <a href="https://www.linkedin.com/in/ziad-ahmed-86bb44256/" className="text-blue-600 hover:underline mt-2 inline-block">LinkedIn</a>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Unveiling the Secret: How to Become a Millionaire Without Taking Unnecessary Risks</h3>
              <p className="text-sm text-gray-700">Becoming a millionaire is about consistent habits. This post dives into how I’ve approached personal finance with long-term thinking. <a href="https://www.investopedia.com/articles/pf/06/compoundinterest.asp" className="text-blue-600">Learn More</a></p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Empower Your Finances with Expert Tips and Insights</h3>
              <p className="text-sm text-gray-700">Smart saving, budgeting, and investing methods I've used as a student and entrepreneur. <a href="https://www.nerdwallet.com/article/finance/how-to-budget" className="text-blue-600">Explore Strategies</a></p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Unleashing Growth: A Martial Arts Journey of Transformation</h3>
              <img src="/img/fighting-blog.jpg" alt="Muay Thai respect bow" className="my-4 rounded-xl shadow-md" />
              <p className="text-sm text-gray-700">Muay Thai taught me discipline, respect, and growth beyond the gym. <a href="https://www.muaythaicitizen.com/benefits-of-muay-thai/" className="text-blue-600">Read Why</a></p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Resume</h2>
        <div className="border rounded-xl p-6 bg-white shadow">
          <embed src="/pdf/Resume.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Sentiment Analysis Tool</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <p className="text-gray-700">My tool merges real-time news sentiment with technical indicators like EMA and VWAP to identify high-probability trades. Built using Python, NLP libraries, and custom logic.</p>
          </div>
          <div className="bg-gray-900 text-white rounded-xl shadow p-6 flex items-center justify-center">
            <p className="italic text-center">[Dashboard Prototype]<br />Visualizing sentiment spikes and ticker signals — this model shows where emotion meets opportunity.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <form className="bg-white rounded-xl shadow p-6">
          <label className="block mb-2 font-medium">Name</label>
          <input className="w-full border p-2 rounded mb-4" type="text" placeholder="Your Name" />

          <label className="block mb-2 font-medium">Email</label>
          <input className="w-full border p-2 rounded mb-4" type="email" placeholder="Your Email" />

          <label className="block mb-2 font-medium">Message</label>
          <textarea className="w-full border p-2 rounded mb-4" rows="4" placeholder="Say hello..." />

          <Button type="submit" className="mt-2">Send</Button>
        </form>
      </section>
    </div>
  );
}
