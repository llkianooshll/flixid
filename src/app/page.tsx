import MoviesCard from "@/components/moviesCard"
import Filters from "@/components/filters"
import AnimationsTrend from "@/components/animationsTrend"
import ComedyTrend from "@/components/comedyTrend"
import KdramaTrend from "@/components/kdramaTrend"
export default function Home() {
  return (
    <div className="">
      <MoviesCard />
      <Filters/>
      <AnimationsTrend/>
      <ComedyTrend/>
      <KdramaTrend/>
    </div>
  )
}
