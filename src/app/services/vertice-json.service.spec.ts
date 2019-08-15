import { TestBed } from '@angular/core/testing';

import { VerticeJsonService } from './vertice-json.service';

describe('VerticeJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    expect(service).toBeTruthy();
  });
  it('should delete from jsonVertex', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertex = { "name": "A",
        "edges": [
        { "name": "B", "weight": 10 },
        { "name": "C", "weight": 5 }
      ]};
    service.removeEdgeFromVertex("B", 10);
    expect(service.jsonVertex.edges.length).toEqual(1);
    expect(service.jsonVertex.edges[0].name).toEqual("C");
  });
  it('should delete nothing from jsonVertex', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertex = { "name": "A",
        "edges": [
        { "name": "B", "weight": 5 },
        { "name": "C", "weight": 5 }
      ]};
    service.removeEdgeFromVertex("G", 5);
    expect(service.jsonVertex.edges.length).toEqual(2);
    expect(service.jsonVertex.edges[0].name).toEqual("B");
  });
  it('pointless test to store json', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertices = [
      { "name": "A",
        "edges": [
        { "name": "B", "weight": 10 },
        { "name": "C", "weight": 5 }
      ]},
      { "name": "B",
        "edges": [
        { "name": "A", "weight": 10 },
        { "name": "C", "weight": 8 }
      ]},
      { "name": "C",
        "edges": [
        { "name": "A", "weight": 5 },
        { "name": "B", "weight": 8 }
      ]}
    ];
    expect(service.jsonVertices.length).toEqual(3);
  });
});
