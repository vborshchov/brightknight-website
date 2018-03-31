const markdownRules = [
  { md: /#([^#].*)/, html: '<h1>$1</h1>' }
]

export function markdownToHTML (text) {
    text = '\n' + (text || '') + '\n'
    for (var i = markdownRules.length - 1; i >= 0; i--) {
      text = text.replace(markdownRules[i].md, markdownRules[i].html)
    }
    return text.trim()
}

export function youtubePlugin (input) {
  return input.replace(/<a href="(.*)">plugin:youtube<\/a>/, (_, match) => `<div class="embed-container">
    <iframe src="https://www.youtube.com/embed/${YouTubeGetID(match)}" frameborder="0" allowfullscreen></iframe>
</div>`)
}

function YouTubeGetID(url){
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
