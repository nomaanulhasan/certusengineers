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
    post_category: "Jobs",
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
    post_category: "Jobs",
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
    post_category: "Jobs",
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
      <div className="w-full max-w-tv">
        <h3 className="mb-3 text-center font-semibold uppercase leading-loose text-section-head">
          Recent Articles
        </h3>
        <h4 className="text-center text-2xl font-medium leading-loose text-primary-text md:text-3xl">
          Job Updates
        </h4>

        <div className="mt-12 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JOB_UPDATES_POSTS.map(
            ({
              id,
              post_pic,
              title,
              desc,
              publish_date,
              post_category,
              author: { name, profile_url, profile_pic },
            }) => (
              <div
                key={id}
                className="flex flex-col justify-between overflow-hidden rounded-md shadow-job-card"
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
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex gap-8 text-sm text-secondary-text">
                    <Link
                      id={`link-to-post-publish-date-${id}`}
                      aria-label="Link to published date"
                      href={`/post/${id}`}
                      className="flex gap-2 duration-300 hover:text-section-head"
                    >
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-base text-section-head"
                      />
                      {publish_date}
                    </Link>
                    <Link
                      id={`link-to-category-jobs-${id}`}
                      aria-label="Link to category"
                      href="/categories/jobs"
                      className="flex gap-2 duration-300 hover:text-section-head"
                    >
                      <FontAwesomeIcon
                        icon={faTag}
                        className="text-base text-section-head"
                      />
                      {post_category}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link
                      id={`link-to-post-title-${id}`}
                      aria-label="Link to post"
                      href={`/post/${id}`}
                      className="text-xl font-semibold text-main-orange duration-300 hover:text-main-blue"
                    >
                      {title}
                    </Link>
                    <div className="text-lg leading-relaxed text-secondary-text">
                      {desc}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-[#e3e3e3] px-6 py-4 text-sm font-medium">
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
                      id={`link-to-profile-${id}`}
                      aria-label="Link to profile"
                      href={profile_url}
                      className="text-main-orange duration-300 hover:text-main-blue"
                    >
                      {name}
                    </Link>
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
