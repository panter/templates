import dayjs from "dayjs"

import "dayjs/locale/en"
import "dayjs/locale/de"
import "dayjs/locale/fr"
import "dayjs/locale/it"

import duration from "dayjs/plugin/duration"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(duration)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(relativeTime)

// ... add more plugins ...

export default dayjs
