// Prefixes root-relative src/href in Markdown with the site base, so content
// can keep writing /images/... no matter where the site is hosted.
export default function rehypeBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (v) => (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? prefix + v : v);
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const key of ['src', 'href']) if (key in node.properties) node.properties[key] = fix(node.properties[key]);
    }
    node.children?.forEach(walk);
  };
  return (tree) => { if (prefix) walk(tree); };
}
