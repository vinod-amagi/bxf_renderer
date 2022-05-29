
export const getLengthForMilliseconds = (duration) => {
    return (duration / 1000 / 60) * 10

}

export const getShowNodeWidth = (show) => {
    const start = Date.parse(show.event_data.start_date_time)
    const end = Date.parse(show.event_data.end_date_time)
    const nodeWidth = getLengthForMilliseconds(end - start)

    return nodeWidth
}


export const getShowElementNodeWidth = (element) => {
    const start = Date.parse(element.event_data.start_date_time)
    const end = Date.parse(element.event_data.end_date_time)
    const nodeWidth = getLengthForMilliseconds(end - start)
  
    return nodeWidth
  }

  export const getShowElementsWidth = (show) => {
    let totalWidth = 0
    for (let i in show.scheduled_elements) {
        const element = show.scheduled_elements[i]
        totalWidth = totalWidth + getShowElementNodeWidth(element) + 2
    }

    return totalWidth
}

export const getShowWidth = (show) => {
    const showNodeWidth = getShowNodeWidth(show)
    const showElementsWidth = getShowElementsWidth(show)
    return showElementsWidth > showNodeWidth ? showElementsWidth : showNodeWidth
}
