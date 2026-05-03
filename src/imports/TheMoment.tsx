export default function TheMoment() {
  return (
    <section className="py-24 bg-[#fdfbf7] px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-serif text-[#2d2d2d]">The Proposal</h2>
          <p className="text-gray-600 leading-relaxed italic">
            "Це був звичайний вечір, який перетворився на казку. Серед тиші та 
            мерехтіння вогнів, Назарій став на одне коліно..."
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ми вирішили поділитися нашою радістю з вами, нашими найближчими людьми.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden shadow-xl">
             <img src="/proposal-1.jpg" alt="Proposal" className="object-cover h-full w-full" />
          </div>
          <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden shadow-xl mt-8">
             <img src="/proposal-2.jpg" alt="Proposal" className="object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}