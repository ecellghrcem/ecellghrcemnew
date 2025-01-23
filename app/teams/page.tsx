import Team from "../../components/Team/Team"
import { teams } from "../../libs/team-data"

export default function TeamPage() {
  return <Team initialTeams={teams} />
}

