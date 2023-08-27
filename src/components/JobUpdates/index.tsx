import { faCalendarDays, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const JOB_UPDATES_POSTS = [
  {
    id: 1,
    title: "Audit /AccountAssistant",
    desc: "Audit /AccountAssistant Eligibility Criteria Having Commerce Background Computer knowledge Experience Preferred…",
    post_pic: "/images/tesimg.jpg",
    publish_date: "Aug 27, 2023",
    post_type: "Jobs",
    author: {
      name: "Certus Engineers",
      profile_url: "/author",
      profile_pic: "/images/user.jpeg",
    },
  },
  {
    id: 2,
    title: "DRAFTMAN",
    desc: "Eligiblity MSC COMPUTER/GEOLOGYDIPLOMA/B.E. IN CIVIL ENGG /CIVIL CONTACT : Mrs. ANKITA…",
    post_pic: "/images/Draftsman-Job-Description.jpeg",
    publish_date: "Aug 26, 2023",
    post_type: "Jobs",
    author: {
      name: "Certus Engineers",
      profile_url: "/author",
      profile_pic: "/images/user.jpeg",
    },
  },
  {
    id: 3,
    title: "Office work",
    desc: "Require Candidatefor full Time BackOffice Workhaving goodcommand inEnglish n alsoComputerKnowledge Contact…",
    post_pic: "/images/customer-service-call-center.jpg",
    publish_date: "Aug 25, 2023",
    post_type: "Jobs",
    author: {
      name: "Certus Engineers",
      profile_url: "/author",
      profile_pic: "/images/user.jpeg",
    },
  },
];

export default function JobUpdates() {
  return (
    <div className="flex justify-center p-10 px-5 sm:p-20">
      <div className="max-w-tv w-full">
        <h4 className="text-section-head text-center font-semibold uppercase leading-loose">
          Recent Articles
        </h4>
        <h3 className="text-primary-text text-center text-2xl font-medium leading-loose md:text-3xl">
          Job Updates
        </h3>

        <div className="mt-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JOB_UPDATES_POSTS.map(
            ({
              id,
              post_pic,
              title,
              desc,
              publish_date,
              post_type,
              author: { name, profile_url, profile_pic },
            }) => (
              <div
                key={id}
                className="shadow-job-card overflow-hidden rounded-md"
              >
                <div className="relative flex h-60 items-center justify-center overflow-hidden">
                  <Image
                    src={post_pic}
                    alt={title}
                    width={350}
                    height={230}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="text-secondary-text flex gap-4 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-section-head text-base"
                        />
                        {publish_date}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon
                          icon={faTag}
                          className="text-section-head text-base"
                        />
                        {post_type}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link
                        href={`/post/${id}`}
                        className="text-main-orange hover:text-main-blue text-xl font-semibold"
                      >
                        {title}
                      </Link>
                      <div className="text-secondary-text text-lg leading-relaxed">
                        {desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t border-[#e3e3e3] p-6 text-sm font-medium">
                    <Image
                      src={profile_pic}
                      className="rounded-full"
                      alt={name}
                      width={35}
                      height={35}
                    />
                    <div>
                      By{" "}
                      <Link
                        href={profile_url}
                        className="text-main-orange hover:text-main-blue"
                      >
                        {name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
