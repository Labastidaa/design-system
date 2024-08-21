import LoginCard from "./LoginCard";
import Table from "./Table";
import SuccessCard from "./SuccessCard";

const SectionComponents = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-24 pb-100">
      <div className="grid w-full gap-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="col-span-4 flex flex-col gap-16 rounded-md border p-24 md:col-span-1 xl:col-span-1">
          <div>
            <h4>Sales</h4>
          </div>
          <div>
            <h3>$10,000.00</h3>
            <p className="text-neutral-60">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-16 rounded-md border p-24 md:col-span-1 xl:col-span-1">
          <div>
            <h4>Subscriptions</h4>
          </div>
          <div>
            <h3>+500</h3>
            <p className="text-neutral-60">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between gap-16 rounded-md border p-24 md:col-span-1 xl:col-span-1">
          <div className="flex items-center gap-8">
            <img src="/analytics.svg" alt="settings" className="h-24 w-24" />
            <h4>Analytics</h4>
          </div>
          <div className="flex justify-end">
            <img src="/arrow-right.svg" alt="settings" className="h-24 w-24" />
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between gap-16 rounded-md border p-24 md:col-span-1 xl:col-span-1">
          <div className="flex items-center gap-8">
            <img src="/settings.svg" alt="settings" className="h-24 w-24" />
            <h4>Settings</h4>
          </div>
          <div className="flex justify-end">
            <img src="/arrow-right.svg" alt="settings" className="h-24 w-24" />
          </div>
        </div>
      </div>
      <div className="grid w-full gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Post */}
        <div className="col-span-1 flex flex-col gap-8 rounded-md border p-24">
          <img
            src="/16_9.webp"
            alt=""
            className="aspect-video w-full rounded-md"
          />
          <div className="flex flex-col gap-8">
            <p className="font-semibold">01 January 2024</p>
            <span className="w-fit rounded-md border bg-white px-8 text-sm font-medium text-black">
              category
            </span>
            <h4>Commodo velit nisi enim ut sunt cupidatat. </h4>
            <p>
              Deserunt nulla minim eiusmod pariatur incididunt in sint
              incididunt reprehenderit irure enim exercitation cillum. Commodo
              velit nisi enim ut sunt cupidatat elit nostrud.
            </p>
            <a href="/" className="text-neutral-50">
              View more
            </a>
          </div>
        </div>
        {/* Table & Success Card */}
        <div className="col-span-1 flex flex-col gap-16 rounded-md">
          <Table />
          <SuccessCard />
        </div>
        {/* Login */}
        <LoginCard />
        <div className="col-span-1 flex flex-col gap-16 md:col-span-1 lg:col-span-3 lg:flex-row xl:col-span-3 xl:flex-row">
          {/* Informative card */}
          <div className="flex items-start justify-center gap-16 rounded-md border-2 border-primary-10 bg-primary-5 p-24">
            <img src="/info.svg" alt="success-icon" className="h-32 w-32" />
            <p>
              Informative card labore est commodo laboris eiusmod Lorem
              reprehenderit consectetur ut esse mollit ipsum dolore excepteur
              duis. Qui culpa minim nisi aliquip proident culpa esse.
            </p>
          </div>
          {/* Error card */}
          <div className="flex items-start justify-center gap-16 rounded-md border-2 border-red-10 bg-[hsl(0,100%,5%)] p-24">
            <img src="/error.svg" alt="success-icon" className="h-32 w-32" />
            <p>
              Error card labore est commodo laboris eiusmod Lorem reprehenderit
              consectetur ut esse mollit ipsum dolore excepteur duis. Qui culpa
              minim nisi aliquip proident culpa esse.
            </p>
          </div>
          {/* Alert card */}
          <div className="flex items-start justify-center gap-16 rounded-md border-2 border-yellow-10 bg-[hsl(44,100%,5%)] p-24">
            <img src="/info.svg" alt="success-icon" className="h-32 w-32" />
            <p>
              Alert card labore est commodo laboris eiusmod Lorem reprehenderit
              consectetur ut esse mollit ipsum dolore excepteur duis. Qui culpa
              minim nisi aliquip proident culpa esse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionComponents;
