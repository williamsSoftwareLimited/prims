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
  it('test no errors vertex edges contains vertex name and specified weight', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertex =  { "name": "A",
                            "edges": [
                            { "name": "B", "weight": 10 },
                            { "name": "C", "weight": 5 }
                          ]};
    service.testVertexEdges("B", 10);

    expect(service.errorMessages.length).toEqual(0);
  });
  it('test more than one matching vertex', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertex =  { "name": "A",
                            "edges": [
                            { "name": "B", "weight": 10 },
                            { "name": "B", "weight": 7 },
                            { "name": "C", "weight": 5 }
                          ]};
    service.testVertexEdges("B", 10);

    expect(service.errorMessages[0]).toEqual(service.MORE_THAN_ONE_MATCHING_VERTEX + "B");
  });
  it('test return weight not matching', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertex =  { "name": "A",
                            "edges": [
                            { "name": "B", "weight": 7 },
                            { "name": "C", "weight": 5 }
                          ]};
    service.testVertexEdges("B", 10);

    expect(service.errorMessages[0]).toEqual(service.RETURN_WEIGHT_NOT_MATCHING);
  });
  it('test checkIntegrity with no vertex', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertices =  [];
    service.checkIntegrity();
    expect(service.errorMessages.length).toEqual(0);
  });
  it('test checkIntegrity with one vertex', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertices =  [{ "name": "A",
                            "edges": []}];
    service.checkIntegrity();
    expect(service.errorMessages.length).toEqual(0);
  });
  it('test checkIntegrity has error with two matching vertex', () => {
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
      { "name": "B",
        "edges": [
        { "name": "A", "weight": 5 },
        { "name": "B", "weight": 8 }
      ]}
    ];
    service.checkIntegrity();
    expect(service.errorMessages[0]).toEqual(service.MATCHING_VERTEX_FOUND);
  });
  it('test checkIntegrity with no errors with 3 vertices', () => {
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
    service.checkIntegrity();
    expect(service.errorMessages.length).toEqual(0);
  });
  it('test checkIntegrity with no errors with 5 vertices', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    service.jsonVertices = [
      { "name": "A",
        "edges": [
        { "name": "B", "weight": 10 },
        { "name": "C", "weight": 5 },
        { "name": "D", "weight": 6 }
      ]},
      { "name": "B",
        "edges": [
        { "name": "A", "weight": 10 },
        { "name": "C", "weight": 8 },
        { "name": "D", "weight": 3 },
        { "name": "E", "weight": 9 }
      ]},
      { "name": "C",
        "edges": [
        { "name": "A", "weight": 5 },
        { "name": "B", "weight": 8 },
        { "name": "E", "weight": 7 }
      ]},
      { "name": "D",
        "edges": [
        { "name": "A", "weight": 6 },
        { "name": "B", "weight": 3 },
        { "name": "E", "weight": 4 }
      ]},
      { "name": "E",
        "edges": [
        { "name": "D", "weight": 4 },
        { "name": "B", "weight": 9 },
        { "name": "C", "weight": 7 }
      ]},
    ];
    service.checkIntegrity();
    expect(service.errorMessages.length).toEqual(0);
  });
  it('test can remove one edge', () => {
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
    service.jsonVertex = service.jsonVertices[0];
    service.removeEdgeFromVertex("B", 10);
    expect(service.jsonVertices[0].edges.length).toEqual(1);
  });
});
