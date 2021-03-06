import { BASE_URL } from "#/utils/constant";
import { get, set } from "#/utils/cache";
import { getMedal } from "#/utils/medal";
import { classNames } from "utils/styles";
import styles from "#/styles/users.module.css";

export default function Users({ data }) {
  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th className={styles.list__header}>No</th>
          <th className={styles.list__header}>Name</th>
          <th className={classNames(styles.list__header, styles.frozen_column)}>Messages</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ username, display_name, counter }, idx) => (
          <tr key={idx}>
            <td className={styles.list__no}>{idx + 1}.</td>
            <td className={styles.list__name}>
              <span style={{ whiteSpace: "nowrap" }}>
                {display_name}
                {username ? (
                  <a
                    className={styles.list__username}
                    href={`https://t.me/${username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{username}
                  </a>
                ) : (
                  <span className={styles.list__no_username}>no username</span>
                )}
                {getMedal(idx + 1)}
              </span>
            </td>
            <td className={classNames(styles.list__score, styles.frozen_column)}>
              <span>💬 {counter}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getServerSideProps() {
  const cached = get("users");
  if (cached) {
    return { props: { data: cached } };
  }

  const res = await fetch(`${BASE_URL}/users`);
  const users = await res.json();
  const sortedUsers = users.sort((a, b) => b.counter - a.counter);

  set("users", sortedUsers);

  return { props: { data: sortedUsers } };
}
