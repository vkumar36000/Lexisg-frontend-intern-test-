// ChatInterface.jsx
import { useState } from 'react';
import Modal from 'react-modal'; // Not gonna lie, I always forget this one exists

// Kinda like a basic chat page for legal Q&A stuff
export default function ChatInterface() {
  const [question, setQuestion] = useState('');  // Typing out query felt too formal
  const [resData, setResData] = useState<any>(null); // I’ll fix the 'any' later maybe
  const [isLoading, setIsLoading] = useState(false); 
  const [showPdf, setShowPdf] = useState(false);  // toggling PDF thingy

  // Legal questions and their ready-made answers (wish exams were like this)
  const sampleData = [
    {
      query: `In a motor accident claim where the deceased was self-employed and aged 54–55 
years at the time of death, is the claimant entitled to an addition towards future 
prospects in computing compensation under Section 166 of the Motor Vehicles Act, 
1988? If so, how much?`,
      answer:
        'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
      citation: {
        text: 'As the age of the deceased at the time of accident was held to be about 54–55 years...',
        source: 'Dani_Devi_v_Pritam_Singh.pdf',
        link: '/Dani_Devi_v_Pritam_Singh.pdf',
      },
    },
    {
      query: 'Is a married daughter entitled to claim compensation under the Motor Vehicles Act if her parents die in an accident?',
      answer:
        'Yes, a married daughter can be a legal heir and thus eligible for compensation under the Motor Vehicles Act, subject to dependency and relationship proof.',
      citation: {
        text: 'A married daughter was recognized as a dependent legal heir eligible for compensation.',
        source: 'Compensation_Case_2021.pdf',
        link: '/Compensation_Case_2021.pdf',
      },
    },
    // ...left the rest intact for now
  ];

  const searchHandler = () => {
    setIsLoading(true); // wait for the magic

    // Simulating API wait time... kinda
    setTimeout(() => {
      const cleanQuery = question.trim();
      const match = sampleData.find(
        (item) => item.query.toLowerCase().trim() === cleanQuery.toLowerCase()
      );

      // dummy check for whether we have an answer or not
      if (match) {
        setResData({
          answer: match.answer,
          citations: [match.citation],
        });
      } else {
        setResData({
          answer: "Hmm, I don’t really have a solid reply to that one.",
          citations: [],
        });
      }

      setIsLoading(false); // all done loading
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow max-w-2xl mx-auto w-full p-6">
        <h1 className="text-xl font-bold text-center mb-5">Lexi AI – Your Legal Sidekick</h1>

        <div className="space-y-5">
          {/* input area */}
          <div className="bg-white p-4 shadow rounded flex flex-col items-center">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your law-related doubt here..."
              rows={4}
              className="w-full resize-none border border-gray-200 p-2 rounded"
            />
            <button
              onClick={searchHandler}
              disabled={isLoading || !question.trim()}
              className="mt-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              {isLoading ? 'Wait a sec...' : 'Ask Lexi'}
            </button>
          </div>

          {/* display what user asked */}
          {resData && (
            <div className="flex justify-end">
              <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded shadow max-w-md">
                {question}
              </div>
            </div>
          )}

          {/* response bubble */}
          {resData && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded shadow max-w-md">
                {resData.answer}

                {/* Citation if available */}
                {resData.citations.length > 0 && (
                  <div className="mt-4 text-sm text-blue-600 underline">
                    <button onClick={() => setShowPdf(true)}>
                      📄 {resData.citations[0].text}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popup for PDF docs */}
      <Modal
        isOpen={showPdf}
        onRequestClose={() => setShowPdf(false)}
        contentLabel="PDF Viewer"
        className="max-w-4xl mx-auto mt-20 bg-white p-6 rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
      >
        <h2 className="text-lg font-semibold mb-3">Reference Document</h2>
        <p className="text-sm text-yellow-600 bg-yellow-100 p-2 mb-2 rounded">
          🔍 Check around <strong>Paragraph 7</strong> — usually something useful there.
        </p>

        <iframe
          src={resData?.citations?.[0]?.link || ''}
          width="100%"
          height="600px"
          title="PDF Preview"
          className="border rounded"
        ></iframe>

        <div className="mt-4 text-right">
          <button
            onClick={() => setShowPdf(false)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
