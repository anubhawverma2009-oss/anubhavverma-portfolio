import { Component } from 'react'

/** Catches WebGL/context failures so the hero can fall back to the CSS orb. */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err) {
    console.warn('[hero] 3D scene disabled:', err?.message || err)
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}
