import { testLog } from "./moduleTest";
import { formatDistance, subDays } from "date-fns";

testLog();



formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });