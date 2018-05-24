import React, { Component } from 'react'

export function withFade(WrappedComponent) {
  return class Wrapper {
    // static name = WrappedComponent.name || WrappedComponent.displayName || 'ComponentWithFade'
    // xsdf = 234
    render() {
      return <WrappedComponent />
    }
  }
}
